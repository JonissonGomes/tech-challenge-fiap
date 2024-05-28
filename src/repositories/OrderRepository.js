const Order = require('../models/Order');

class OrderRepository {
    async findAll() {
        return Order.find();
    }
}

module.exports = new OrderRepository();
