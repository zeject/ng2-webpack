import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpTestComponent } from './http.component';
import { httpRouting } from './http.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    httpRouting
  ],
  declarations: [
    HttpTestComponent
  ],
  providers: [
  ]
})
export class HttpTestModule { }
