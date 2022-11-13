import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: ':state',
    loadChildren: () => import('./light-bulb/light-bulb.module').then(m => m.LightBulbModule),
    outlet: 'bulb'
  },
  {
    path: ':state',
    loadChildren: () => import('./light-switch/light-switch.module').then(m => m.LightSwitchModule),
    outlet: 'switch'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
