import { Observable } from 'rxjs';
import Customer from '../../models/customers/customer';

interface ICustomerService {
    getCustomers(): Observable<Customer[]>;
    saveCustomerDetail(customerDetail: Customer): Observable<boolean>;
}

export default ICustomerService;
