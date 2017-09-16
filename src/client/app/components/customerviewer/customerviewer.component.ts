import { Component, Input } from '@angular/core';

import Customer from '../../models/customers/customer';

let COMPONENT_DEF = {
    moduleId: module.id,
    templateUrl: 'customerviewer.component.html',
    selector: 'customerviewer-component'
};

@Component(COMPONENT_DEF)
class CustomerViewerComponent {
    @Input() public customerInfo: Customer;

    constructor() {
        console.log('Customer Viewer Component Initialized!');
    }
}

export default CustomerViewerComponent;
