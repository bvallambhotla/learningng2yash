import { Component, Input } from '@angular/core';

import Customer from '../../models/customers/customer';

let COMPONENT_DEF = {
    moduleId: module.id,
    templateUrl: 'customerdetailviewer.component.html',
    styleUrl: 'customerdetailviewer.component.css',
    selector: 'customerdetailviewer-component'
};

@Component(COMPONENT_DEF)
class CustomerDetailViewerComponent {
    @Input() public customerDetail: Customer;

    constructor() {
        console.log('Customer Detail Viewer Component Initialized!');
    }
}

export default CustomerDetailViewerComponent;
