import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: 'bulb', loadChildren: () => import('./light-bulb/light-bulb.module').then(m => m.LightBulbModule) },
  { path: 'switch', loadChildren: () => import('./light-switch/light-switch.module').then(m => m.LightSwitchModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
