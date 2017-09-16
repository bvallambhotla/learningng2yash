import { HttpModule, Http, RequestOptions } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import crmSystemRouterModuleWithProviders
    from '../../routing/crmsystem/crmsystem.routes';

import { CUSTOMER_SERVICE_TOKEN, CrmSystemComponent }
    from '../../components/crmsystem/crmsystem.component';
import { SERVICE_URL_TOKEN, CustomerService }
    from '../../services/customers/customers.service';
import CustomerViewerComponent
    from '../../components/customerviewer/customerviewer.component';
import CustomerSearchPanelComponent
    from '../../components/customersearchpanel/customersearchpanel.component';
import CustomerDetailViewerComponent
    from '../../components/customerdetailviewer/customerdetailviewer.component';

import PhotoUrlPipe from '../../pipes/photourl/photourl.pipe';
import WherePipe from '../../pipes/where/where.pipe';
import StatusPipe from '../../pipes/status/status.pipe';

var getServiceUrl = function () {
    let environmentType: string = String('<%= BUILD_TYPE %>');
    let serviceUrl: string = '';

    if (environmentType === 'prod') {
        serviceUrl = String('<%= PROD_SERVICE_URL %>');
    } else {
        serviceUrl = String('<%= DEV_SERVICE_URL %>');
    }

    return serviceUrl;
};

let PROVIDERS_CONFIG = [
    {
        provide: SERVICE_URL_TOKEN,
        useFactory: getServiceUrl
    },
    {
        provide: CUSTOMER_SERVICE_TOKEN,
        useClass: CustomerService,
        deps: [Http, RequestOptions, SERVICE_URL_TOKEN]
    }
];

let MODULE_DEF: any = {
    imports: [
        HttpModule,
        CommonModule,
        FormsModule,
        crmSystemRouterModuleWithProviders
    ],
    declarations: [
        CrmSystemComponent,
        CustomerViewerComponent,
        CustomerSearchPanelComponent,
        CustomerDetailViewerComponent,
        PhotoUrlPipe,
        WherePipe,
        StatusPipe
    ],
    providers: PROVIDERS_CONFIG
};

export default MODULE_DEF;
