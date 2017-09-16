import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CrmSystemComponent } from '../../components/crmsystem/crmsystem.component';

let securityRouteEntries: any[] =
    [
        {
            path: 'crm-system',
            component: CrmSystemComponent
        }
    ];

let crmSystemRouterModuleWithProviders: ModuleWithProviders =
    RouterModule.forRoot(securityRouteEntries, {
        useHash: false
    });

export default crmSystemRouterModuleWithProviders;
