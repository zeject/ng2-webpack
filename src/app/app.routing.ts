import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { authProviders, dashboardRoutes } from './dashboard/dashboard.routing';
import { AuthGuard } from './+home/auth-guard.service';

const homeRoutes: Routes = [
    {
        path: 'home',
        loadChildren: () => System.import('./+home/home.module'),
        // loadChildren: 'app/home/home.module#HomeModule',
        canLoad: [AuthGuard]
    }
];

const appRoutes: Routes = [
    ...dashboardRoutes,
    ...homeRoutes
];

export const appRoutingProviders: any[] = [
    authProviders
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
