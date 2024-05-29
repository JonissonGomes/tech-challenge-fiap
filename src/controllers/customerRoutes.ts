import express from 'express';
import CustomerRepository from '../repositories/CustomerRepository';
import CreateCustomer from '../domain/useCases/Customers/CreateCustomer';
import ViewCustomer from '../domain/useCases/Customers/ViewCustomer';
import ICustomerRepository from '../repositories/interfaces/ICustomerRepository';

const router = express.Router();

const customerRepository = new CustomerRepository();
const createCustomer = new CreateCustomer(customerRepository as ICustomerRepository);
const viewCustomer = new ViewCustomer(customerRepository as ICustomerRepository);

router.post('/', async (req, res) => {
    try {
        const customerData = req.body;
        const customer = await createCustomer.execute(customerData);
        res.status(201).json(customer);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const customer = await viewCustomer.findCustomerById(id);
        res.json(customer);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/cpf/:cpf', async (req, res) => {
    try {
        const cpf = req.params.cpf;
        const customer = await viewCustomer.findCustomerByCPF(cpf);
        res.json(customer);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/email/:email', async (req, res) => {
    try {
        const email = req.params.email;
        const customer = await viewCustomer.findCustomerByEmail(email);
        res.json(customer);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

export default router;