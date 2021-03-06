import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import './rxjs-operators';

import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpTestModule } from './http/http.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing,
    HttpTestModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  providers: [
    appRoutingProviders,
    { provide: APP_BASE_HREF, useValue: '/my/app' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
