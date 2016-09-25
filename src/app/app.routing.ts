import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { authProviders, dashboardRoutes } from './dashboard/dashboard.routing';


const appRoutes: Routes = [
    ...dashboardRoutes
];

export const appRoutingProviders: any[] = [
    authProviders
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
