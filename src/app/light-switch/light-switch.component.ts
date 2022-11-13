import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, take, tap } from 'rxjs';

@Component({
  selector: 'app-light-switch',
  templateUrl: './light-switch.component.html',
  styleUrls: ['./light-switch.component.scss']
})
export class LightSwitchComponent implements OnInit {

  // essa observable irá retornar o valor do parametro state(on|off)
  state$: Observable<string> = this.route.params.pipe(
    map(params => params['state'])
  )

  // ActivatedRoute obtem a rota ativa
  // Router possibilita navegar entre rotas
  constructor(private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
  }

  flipSwitch(){
    this.state$.pipe(
      take(1),
      tap(state => this.doFlipSwitch(state))
    ).subscribe();
  }

  private doFlipSwitch(state: string){
    state = state === 'on' ? 'off' : 'on';

    // altera os paarmetros da rota atual
    this.router.navigate([
      { outlets: {bulb: state, switch: state} }
    ])
  }

}
