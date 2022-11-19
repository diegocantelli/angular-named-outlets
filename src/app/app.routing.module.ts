import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LightBulbGuard } from "./guards/light-bulb.guard";
import { LightSwitchGuard } from "./guards/light-switch.guard";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full', // verifica a url inteira, ignorando as rotas 'root' de componentes filhos
    redirectTo: '/(bulb:off)'
  },
  {
    path: ':state',
    loadChildren: () => import('./light-bulb/light-bulb.module').then(m => m.LightBulbModule),
    outlet: 'bulb',
    canLoad: [ LightBulbGuard ]
  },
  {
    path: ':state',
    loadChildren: () => import('./light-switch/light-switch.module').then(m => m.LightSwitchModule),
    outlet: 'switch',
    canLoad: [ LightSwitchGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
