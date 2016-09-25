import { HomeCenterComponent } from './homeCenter.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeDetailComponent } from './homeDetail.component';
import { AuthGuard } from './auth-guard.service';

const homedRoutes: Routes = [
    
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                canActivateChild: [AuthGuard],
                children: [
                    {
                        path: ':id',
                        component: HomeDetailComponent
                    },
                    {
                        path: '',
                        component: HomeCenterComponent,
                    }
                ]
            }
        ]
    }
];

export const homedRouting: ModuleWithProviders = RouterModule.forChild(homedRoutes);
