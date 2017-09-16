import { NgModule } from '@angular/core';
import MODULE_DEF from './crmsystem.module.def';

@NgModule(MODULE_DEF)
class CrmSystemModule {
    constructor() {
        console.log('CRM System Module Initialized!');
    }
}

export default CrmSystemModule;
