import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import HomeComponent from '../../components/home/home.component';
import AboutUsComponent from '../../components/aboutus/aboutus.component';

let sharedRouteEntries: any[] = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

let sharedRouteModuleWithProviders: ModuleWithProviders =
    RouterModule.forRoot(sharedRouteEntries, {
        useHash: false
    });

export default sharedRouteModuleWithProviders;
