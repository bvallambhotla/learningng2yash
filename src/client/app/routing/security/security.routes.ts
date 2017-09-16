import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import SigninComponent from '../../components/signin/signin.component';

let securityRouteEntries: any[] =
    [
        {
            path: 'sign-in',
            component: SigninComponent
        }
    ];

let securityRouterModuleWithProviders: ModuleWithProviders =
    RouterModule.forRoot(securityRouteEntries, {
        useHash: false
    });

export default securityRouterModuleWithProviders;
