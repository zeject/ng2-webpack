import {HomeDetailComponent} from './homeDetail.component';
import {HomeCenterComponent} from './homeCenter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {homedRouting} from './home.routing';
import {HomeComponent} from './home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    homedRouting
  ],
  declarations: [
    HomeComponent,
    HomeCenterComponent,
    HomeDetailComponent
  ],
  providers: [
  ]
})
export class HomeModule { }
