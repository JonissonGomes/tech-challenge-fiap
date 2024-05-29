import { CustomerDTO } from '../../domain/useCases/Customers/CustomerDTO';

interface ICustomerRepository {
    [key: string]: any; // for dynamic access to properties
    createCustomer(customer: Partial<CustomerDTO>): Promise<CustomerDTO>;
    getCustomerById(id: string): Promise<CustomerDTO | null>;
    getCustomerByEmail(email: string): Promise<CustomerDTO | null>;
    getCustomerByCPF(cpf: string): Promise<CustomerDTO | null>;
    updateCustomer(id: string, customer: Omit<Partial<CustomerDTO>, 'id'>): Promise<CustomerDTO | null>;
    deleteCustomer(id: string): Promise<void>;
}

export default ICustomerRepository;