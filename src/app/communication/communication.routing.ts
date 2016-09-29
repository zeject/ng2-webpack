import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommunicationComponent } from './communication.component';


export const loadCommunicationRoutes: Routes = [
    {
        path: 'communication',
        loadChildren: () => System.import('./communication.module')
    }
];

const communicationRoutes: Routes = [

    {
        path: '',
        component: CommunicationComponent
    }
];

export const communicationRouting: ModuleWithProviders = RouterModule.forChild(communicationRoutes);
