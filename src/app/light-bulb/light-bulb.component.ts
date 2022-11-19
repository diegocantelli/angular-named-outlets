import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, map, Observable, Subject, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-light-bulb',
  templateUrl: './light-bulb.component.html',
  styleUrls: ['./light-bulb.component.scss']
})
export class LightBulbComponent implements OnInit {

  // essa observable irá retornar o valor do parametro state(on|off)
  state$: Observable<string> = this.route.params.pipe(
    map(params => params['state'])
  )

  popupWindow!: Window | null;

  private popupCLosed: Subject<void> = new Subject<void>();

  // ActivatedRoute obtem a rota ativa
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

  }

  openLightSwitchPopup(){
    if(!this.popupWindow){
      this.state$.pipe(
        take(1)
      ).subscribe(state => this.openPopupWindow(state));
    } else {
      this.popupWindow.close();
    }
  }

  private openPopupWindow(state: string) {

    this.popupWindow = window.open(`http://localhost:4200/(switch:${state})`, '__blank', 'height=100,width=100');
    this.startCheckingPopupWindow();

    // Cria uma observable com base em um evento que ocorre em um elemento
    fromEvent(window, 'message')
      .pipe(
        //fica escutando o evendo de postmessage até que popupClosed emita um valor
        takeUntil(this.popupCLosed),
        tap((event: any) => {
          if(event.data && /^(on|off)/.test(event.data)) {
            this.router.navigate([
              { outlets: {bulb: event.data, switch: event.data} }
            ]);
          }
        })
      ).subscribe()
  }

  // verifica a cada 500ms se a janela popup foi fechada
  private startCheckingPopupWindow(){
    const interval = setInterval(() => {
      if(this.popupWindow?.closed){
        this.popupCLosed.next();
        this.popupWindow = null;
        clearInterval(interval);
      }
    }, 500);
  }

}
