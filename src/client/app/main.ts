import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import './operators';

import BootModule from './modules/boot/boot.module';

let buildEnvironment = String('<%= BUILD_TYPE %>');

if (buildEnvironment === 'prod') {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(BootModule);
