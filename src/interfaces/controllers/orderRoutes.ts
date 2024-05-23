import express from 'express';

const router = express.Router();

// const orderRepository = new OrderRepository(); // Add MONGODB implementation
// const createOrder = new CreateOrder(orderRepository as IOrderRepository);
// const viewOrder = new ViewOrder(orderRepository as IOrderRepository);
// const editOrder = new EditOrder(orderRepository as IOrderRepository);

router.post('/', async (req, res) => {
    try {
        const orderData = req.body;
        // const order = await createOrder.execute(orderData);
        // res.status(201).json(order);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        // const order = await viewOrder.execute(id);
        // res.json(order);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const orderData = req.body;
        // const order = await editOrder.execute(id, orderData);
        // res.json(order);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

export default router;