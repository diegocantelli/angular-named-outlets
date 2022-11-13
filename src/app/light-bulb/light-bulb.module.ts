import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LightBulbComponent } from './light-bulb.component';


const routes: Routes = [
  { path: '', component: LightBulbComponent }
];

@NgModule({
  declarations: [
    LightBulbComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LightBulbModule { }
