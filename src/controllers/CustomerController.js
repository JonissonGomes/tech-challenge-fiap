const CustomerRepository = require('../repositories/CustomerRepository');

const registerCustomer = async (req, res) => {
    try {
        const customer = await CustomerRepository.save(req.body);
        res.status(201).json(customer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCustomerById = async (req, res) => {
    try {
        const customer = await CustomerRepository.findById(req.params.id);
        if (!customer) return res.status(404).json({ message: 'Customer not found' });
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCustomerByCpf = async (req, res) => {
    try {
        const customer = await CustomerRepository.findByCpf(req.params.cpf);
        if (!customer) return res.status(404).json({ message: 'Customer not found' });
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateCustomer = async (req, res) => {
    try {
        const customer = await CustomerRepository.update(req.params.id, req.body);
        if (!customer) return res.status(404).json({ message: 'Customer not found' });
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteCustomer = async (req, res) => {
    try {
        const customer = await CustomerRepository.delete(req.params.id);
        if (!customer) return res.status(404).json({ message: 'Customer not found' });
        res.status(200).json({ message: 'Customer deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    registerCustomer,
    getCustomerById,
    getCustomerByCpf,
    updateCustomer,
    deleteCustomer
};
