import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, take } from 'rxjs';

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

  // ActivatedRoute obtem a rota ativa
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

  }

  openLightSwitchPopup(){
    this.state$.pipe(
      take(1)
    ).subscribe(state => this.openPopupWindow(state));
  }

  private openPopupWindow(state: string) {

    this.popupWindow = window.open(`http://localhost:4200/(switch:${state})`, '__blank', 'height=100,width=100');
    this.startCheckingPopupWindow();

    // fica escutando da janela popup um eventdo do tipo message, que sera emitido via postMessage
    window.addEventListener('message', (event: MessageEvent) => {
      //verifica se recebeu da janela popup um postmessage valido e que inicie com os valores on ou off
      if(event.data && /^(on|off)/.test(event.data)) {
        this.router.navigate([
          { outlets: {bulb: event.data, switch: event.data} }
        ]);
      }
    })
  }

  // verifica a cada 500ms se a janela popup foi fechada
  private startCheckingPopupWindow(){
    const interval = setInterval(() => {
      if(this.popupWindow?.closed){
        this.popupWindow = null;
        clearInterval(interval);
      }
    }, 500);
  }

}
