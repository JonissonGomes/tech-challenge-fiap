import ICustomerRepository from '../../../repositories/interfaces/ICustomerRepository';
import { CustomerDTO } from './CustomerDTO';

class ViewCustomer {
    constructor(private customerRepository: ICustomerRepository) { }

    async findCustomer(field: string, value: string, errorMessage: string): Promise<CustomerDTO | null> {
        if (!value) {
            throw new Error('You must provide a valid value to search for customers');
        }

        let customer: CustomerDTO | null = null;
        customer = await this.customerRepository[`getCustomerBy${field.charAt(0).toUpperCase() + field.slice(1)}`](value);

        if (!customer) {
            throw new Error('Customer not found.');
        }

        return customer;
    }
}

export default ViewCustomer;