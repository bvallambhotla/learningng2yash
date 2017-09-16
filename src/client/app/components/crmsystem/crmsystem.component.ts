import { Component, Inject, OnInit, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import Customer from '../../models/customers/customer';
import ICustomerService from '../../services/customers/customer.service.interface';

const INVALID_ARGUMENTS: string = 'Invalid Argument(s) Specified!';
const CUSTOMER_SERVICE_TOKEN = new InjectionToken<string>('CustomerService');

let COMPONENT_DEF = {
    moduleId: module.id,
    templateUrl: 'crmsystem.component.html',
    selector: 'crmsystem-component'
};

@Component(COMPONENT_DEF)
class CrmSystemComponent implements OnInit {
    public customers: Customer[] = [];
    public isCompleted: boolean = false;
    public errorMessage: string = '';

    constructor(
        @Inject(CUSTOMER_SERVICE_TOKEN) private customerService: ICustomerService) {
        if (!this.customerService)
            throw new Error(INVALID_ARGUMENTS);
    }

    ngOnInit() {
        if (this.customerService) {
            this.isCompleted = false;

            this.customerService.getCustomers()
                .subscribe(
                result => this.customers = result,
                error => this.errorMessage = `Error Occurred, Details : ${error.toString()}`,
                () => this.isCompleted = true);
        }
    }
}

export {
    CUSTOMER_SERVICE_TOKEN,
    CrmSystemComponent
};
