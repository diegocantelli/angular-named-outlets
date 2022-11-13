import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LightSwitchComponent } from './light-switch.component';


const routes: Routes = [
  { path: '', component: LightSwitchComponent }
];

@NgModule({
  declarations: [
    LightSwitchComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LightSwitchModule { }
