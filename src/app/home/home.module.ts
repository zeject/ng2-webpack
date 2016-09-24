import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { homedRouting } from './home.routing';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    homedRouting
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
  ]
})
export class HomeModule { }
