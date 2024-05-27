const Customer = require('../models/Customer');

class CustomerRepository {
    async findById(id) {
        return Customer.findById(id);
    }

    async findByCpf(cpf) {
        return Customer.findOne({ cpf });
    }

    async save(customerData) {
        const customer = new Customer(customerData);
        return customer.save();
    }

    async update(id, customerData) {
        return Customer.findByIdAndUpdate(id, customerData, { new: true });
    }

    async delete(id) {
        return Customer.findByIdAndDelete(id);
    }

    async findAll() {
        return Customer.find();
    }
}

module.exports = new CustomerRepository();
