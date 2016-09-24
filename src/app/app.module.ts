import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { routing,
         appRoutingProviders }  from './app.routing';

import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    DashboardModule,
    HomeModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
