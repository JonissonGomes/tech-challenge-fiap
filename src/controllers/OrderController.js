const OrderRepository = require('../repositories/OrderRepository');

const listOrders = async (req, res) => {
    try {
        const orders = await OrderRepository.findAll();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const fakeCheckout = async (req, res) => {
    try {
        // Simulate order processing
        const order = {
            id: new Date().getTime(),
            items: req.body.items,
            total: req.body.total,
            status: 'Processed'
        };
        // In a real application, save the order to the database
        res.status(200).json({ message: 'Order processed', order });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listOrders,
    fakeCheckout,
};
