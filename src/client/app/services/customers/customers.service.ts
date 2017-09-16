import { Injectable, InjectionToken, Inject } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import CustomerMap from '../../utilities/customer-map';
import Customer from '../../models/customers/customer';
import ICustomerService from './customer.service.interface';

const INVALID_ARGUMENTS: string = 'Invalid Argument(s) Specified!';
const SERVICE_URL_TOKEN = new InjectionToken<string>("ServiceUrlToken");
const CONTENT_TYPE: string = 'Content-Type';
const ACCEPT: string = 'Accept';
const JSON_CONTENT_TYPE: string = 'application/json';

@Injectable()
class CustomerService implements ICustomerService {
    constructor(
        private httpService: Http,
        private requestOptions: RequestOptions,
        @Inject(SERVICE_URL_TOKEN) private serviceUrl: string) {

        if (this.requestOptions) {
            this.requestOptions.headers.append(CONTENT_TYPE, JSON_CONTENT_TYPE);
            this.requestOptions.headers.append(ACCEPT, JSON_CONTENT_TYPE);
        }
    }

    getCustomers(): Observable<Customer[]> {
        if (!this.httpService)
            throw new Error(INVALID_ARGUMENTS);

        let customerServiceUrl = `${this.serviceUrl}/api/customers`;

        let customers: Observable<Customer[]> =
            this.httpService
                .get(customerServiceUrl, this.requestOptions)
                .map(response => {
                    let jsonData = response.json();

                    return jsonData.map((item: any): Customer => {
                        return CustomerMap.transform(item);
                    });
                });

        return customers;
    }

    saveCustomerDetail(customerDetail: Customer): Observable<boolean> {
        let result: Observable<boolean> = null;

        return result;
    }
}

export {
    SERVICE_URL_TOKEN,
    CustomerService
};
