import { CustomerDTO } from "../domain/useCases/Customers/CustomerDTO";
import ICustomerRepository from "./interfaces/ICustomerRepository";
import { Customer } from '../interfaces/models/Customer';

class CustomerRepository implements ICustomerRepository {

    async createCustomer(customer: Partial<CustomerDTO>): Promise<CustomerDTO> {
        const newCustomer = new Customer(customer);
        await newCustomer.save();
        return newCustomer.toObject();
    }

    async getCustomerById(id: string): Promise<CustomerDTO | null> {
        const customer = await Customer.findById(id);
        return customer ? customer.toObject() : null;
    }

    async getCustomerByEmail(email: string): Promise<CustomerDTO | null> {
        const customer = await Customer.findOne({ email });
        return customer ? customer.toObject() : null;
    }

    async getCustomerByCPF(cpf: string): Promise<CustomerDTO | null> {
        const customer = await Customer.findOne({ cpf });
        return customer ? customer.toObject() : null;
    }

    async updateCustomer(id: string, customer: Omit<Partial<CustomerDTO>, 'id'>): Promise<CustomerDTO | null> {
        const updatedCustomer = await Customer.findByIdAndUpdate(id, customer, { new: true });
        return updatedCustomer ? updatedCustomer.toObject() : null;
    }

    async deleteCustomer(id: string): Promise<void> {
        await Customer.findByIdAndDelete(id);
    }
}

export default CustomerRepository;
