import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpTestComponent } from './http.component';

export const httpRoutes: Routes = [
    { path: 'http', component: HttpTestComponent }
];

export const httpRouting: ModuleWithProviders = RouterModule.forChild(httpRoutes);
