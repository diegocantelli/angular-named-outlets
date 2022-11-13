import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-light-switch',
  templateUrl: './light-switch.component.html',
  styleUrls: ['./light-switch.component.scss']
})
export class LightSwitchComponent implements OnInit {

  state$: Observable<string> = this.route.params.pipe(
    map(params => params['state'])
  )

  // ActivatedRoute obtem a rota ativa
  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
  }

}
