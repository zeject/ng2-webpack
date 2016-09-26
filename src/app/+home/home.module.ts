import { HomeCenterComponent } from './home-center.component';
import { HomeDetailComponent } from './home-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { homedRouting } from './home.routing';
import { HomeComponent } from './home.component';
import { HomeDetailResolve } from './home-detail-resolve.service';

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
    HomeDetailResolve
  ]
})
export default class HomeModule { }
