import { AuthGuard } from '../home/auth-guard.service';
import { AuthService } from '../home/auth.service';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const dashboardRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    { path: 'dashboard', component: DashboardComponent }
];

export const authProviders = [
    AuthGuard,
    AuthService
];

// export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);
