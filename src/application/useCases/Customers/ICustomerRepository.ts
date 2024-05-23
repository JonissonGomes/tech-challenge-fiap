import { CustomerDTO } from './CustomerDTO';

interface ICustomerRepository {
    createCustomer(customer: Partial<CustomerDTO>): Promise<CustomerDTO>;
    getCustomer(id: string): Promise<CustomerDTO | null>;
    getCustomerByEmail(email: string): Promise<CustomerDTO | null>;
    getCustomerByCPF(cpf: string): Promise<CustomerDTO | null>;
    updateCustomer(id: string, customer: Partial<CustomerDTO>): Promise<CustomerDTO>;
    deleteCustomer(id: string): Promise<void>;
}

export default ICustomerRepository;