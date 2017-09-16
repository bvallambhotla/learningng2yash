import { NgModule } from '@angular/core';

import MODULE_DEF from './shared.module.def';

@NgModule(MODULE_DEF)
class SharedModule {
    constructor() {
        console.log('Shared Module Initialized!');
    }
}

export default SharedModule;
