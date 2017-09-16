import { NgModule } from '@angular/core';

import securityRouterModuleWithProviders
    from '../../routing/security/security.routes';

import SignInComponent from '../../components/signin/signin.component';

let MODULE_DEF: any = {
    imports: [securityRouterModuleWithProviders],
    declarations: [SignInComponent]
};

@NgModule(MODULE_DEF)
class SecurityModule {
    constructor() {
        console.log('Security Module Initialized!');
    }
}

export default SecurityModule;
