import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LightBulbGuard implements CanLoad {

  constructor(private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return true;
      // const state = segments[0].path;
      // if((/^(on|off)/.test(state)))
      //   return true;

      // this.router.navigate([{
      //   outlets: { bulbs: 'off' }
      // }]);

      return false;
  }

}
