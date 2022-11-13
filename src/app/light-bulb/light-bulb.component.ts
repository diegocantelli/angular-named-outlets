import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';

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

  // ActivatedRoute obtem a rota ativa
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
