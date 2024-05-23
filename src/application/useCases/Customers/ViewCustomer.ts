import ICustomerRepository from './ICustomerRepository';
import { CustomerDTO } from './CustomerDTO';

interface FindCustomerParams {
    id?: string;
    email?: string;
    cpf?: string;
}

class ViewCustomer {
    constructor(private customerRepository: ICustomerRepository) { }

    async execute(params: FindCustomerParams): Promise<CustomerDTO | null> {
        let customer: CustomerDTO | null = null;

        if (params.id) {
            customer = await this.customerRepository.getCustomer(params.id);
        } else if (params.email) {
            customer = await this.customerRepository.getCustomerByEmail(params.email);
        } else if (params.cpf) {
            customer = await this.customerRepository.getCustomerByCPF(params.cpf);
        } else {
            throw new Error('You must provide an id, email, or cpf to find a customer.');
        }

        if (!customer) {
            throw new Error('Customer not found.');
        }

        return customer;
    }
}

export default ViewCustomer;