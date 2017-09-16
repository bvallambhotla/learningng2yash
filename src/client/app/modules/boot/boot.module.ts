import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import SharedModule from '../shared/shared.module';
import SecurityModule from '../security/security.module';
import CrmSystemModule from '../crmsystem/crmsystem.module';

import AppComponent from '../../components/app/app.component';

let MODULE_DEF: any = {
    declarations: [AppComponent],
    imports: [
        BrowserModule, SharedModule,
        SecurityModule, CrmSystemModule
    ],
    exports: [AppComponent],
    bootstrap: [AppComponent]
};

@NgModule(MODULE_DEF)
class BootModule {
    constructor() {
        console.log('Boot Module Initialized!');
    }
}

export default BootModule;
