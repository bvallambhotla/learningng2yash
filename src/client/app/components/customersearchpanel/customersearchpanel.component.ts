import { Component, Input } from '@angular/core';

import Customer from '../../models/customers/customer';

let COMPONENT_DEF = {
    moduleId: module.id,
    templateUrl: 'customersearchpanel.component.html',
    styleUrl: 'customersearchpanel.component.css',
    selector: 'customersearchpanel-component'
};

@Component(COMPONENT_DEF)
class CustomerSearchPanelComponent {
    @Input() public searchString: string;

    constructor() {
        console.log('Customer Viewer Component Initialized!');
    }
}

export default CustomerSearchPanelComponent;
