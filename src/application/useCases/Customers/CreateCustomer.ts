import ICustomerRepository from './ICustomerRepository';
import { CustomerDTO } from './CustomerDTO';

class CreateCustomer {
    constructor(private customerRepository: ICustomerRepository) { }

    async execute(customerData: Omit<CustomerDTO, 'id' | 'createdAt' | 'updatedAt'>): Promise<CustomerDTO> {
        const createdAt = new Date();
        const updatedAt = createdAt;
        const customer: CustomerDTO = {
            id: '', // Lets us a UUID generator here
            ...customerData,
            createdAt,
            updatedAt,
        };

        return this.customerRepository.createCustomer(customer);
    }
}

export default CreateCustomer;