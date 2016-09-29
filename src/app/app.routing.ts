import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { authProviders, dashboardRoutes } from './dashboard/dashboard.routing';
import { AuthGuard } from './+home/auth-guard.service';
import { loadHomeRoutes } from './+home/home.routing';
import { loadCommunicationRoutes } from './communication/communication.routing';

const appRoutes: Routes = [
    ...dashboardRoutes,
    ...loadHomeRoutes,
    ...loadCommunicationRoutes
];

export const appRoutingProviders: any[] = [
    authProviders
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
