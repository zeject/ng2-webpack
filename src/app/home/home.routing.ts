import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const homedRoutes: Routes = [
    { path: 'home', component: HomeComponent }
];

export const homedRouting: ModuleWithProviders = RouterModule.forChild(homedRoutes);
