import ICustomerRepository from '../../../repositories/interfaces/ICustomerRepository';
import { CustomerDTO } from './CustomerDTO';

class CreateCustomer {
    constructor(private customerRepository: ICustomerRepository) { }

    async execute(customerData: Omit<CustomerDTO, 'updatedAt'>): Promise<CustomerDTO> {
        const createdAt = new Date();
        const updatedAt = createdAt;
        const customer: CustomerDTO = {
            ...customerData,
            createdAt,
            updatedAt,
        };

        return this.customerRepository.createCustomer(customer);
    }
}

export default CreateCustomer;