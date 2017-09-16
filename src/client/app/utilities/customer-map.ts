import Customer from '../models/customers/customer';

const INVALID_ARGUMENTS: string = 'Invalid Argument(s) Specified!';

class CustomerMap {
    static transform(customerObject: any): Customer {
        if (!customerObject)
            throw new Error(INVALID_ARGUMENTS);

        let transformedObject: Customer = new Customer(
            customerObject.id, customerObject.name,
            customerObject.address, customerObject.credit,
            customerObject.status, customerObject.remarks);

        return transformedObject;
    }
}

export default CustomerMap;
