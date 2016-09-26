import {HomeDetailComponent} from './home-detail.component';
import {HomeCenterComponent} from './home-center.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import {AuthGuard} from './auth-guard.service';
import { HomeDetailResolve } from './home-detail-resolve.service';


export const loadHomeRoutes: Routes = [
    {
        path: 'home',
        loadChildren: () => System.import('./home.module'),
        // loadChildren: 'app/home/home.module#HomeModule',
        canLoad: [AuthGuard]
    }
];

const homedRoutes: Routes = [

    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                canActivateChild: [AuthGuard],
                children: [
                    {
                        path: ':id',
                        component: HomeDetailComponent,
                        resolve: {
                            isExist: HomeDetailResolve
                        }
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
