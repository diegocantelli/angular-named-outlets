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
      // a cada execucao do subscribe, é chamado metodo doFlipSwitch, que por sua vez acaba alterando os parametros de rota,
      // que consequentemente dispara uma nova emissao para esta observable, entrando assim em um loop infinito.
      // o take serve para pegarmos somente a primeira emissao, que sera o inverso dos parametros de rota atuais.
      take(1)
    )
    // este subscribe é necessário para poder executar o pipeline da observable
    // a cada chamada deste subscribe e chamado o metodo doFlipSwitch que altera os parametros de rota,
    // por isso e necessario o take(1), para nao entrar em loop infinito
    .subscribe(state => this.doFlipSwitch(state));
  }

  private doFlipSwitch(state: string){
    state = state === 'on' ? 'off' : 'on';

    console.log('doFlipSwitch', state);

    // altera os paarmetros da rota atual
    this.router.navigate([
      { outlets: {bulb: state, switch: state} }
    ])
  }

}
