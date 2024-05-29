import express from 'express';
import OrderRepository from '../repositories/OrderRepository';
import CreateOrder from '../domain/useCases/Order/CreateOrder';
import ViewOrder from '../domain/useCases/Order/ViewOrder';
import EditOrder from '../domain/useCases/Order/EditOrder';
import IOrderRepository from '../repositories/interfaces/IOrderRepository';

const router = express.Router();

const orderRepository = new OrderRepository();
const createOrder = new CreateOrder(orderRepository as IOrderRepository);
const viewOrder = new ViewOrder(orderRepository as IOrderRepository);
const editOrder = new EditOrder(orderRepository as IOrderRepository);

router.post('/', async (req, res) => {
    try {
        const orderData = req.body;
        const order = await createOrder.execute(orderData);
        res.status(201).json(order);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const order = await viewOrder.executeAll();
        res.json(order);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const order = await viewOrder.execute(id);
        res.json(order);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const orderData = req.body;
        const order = await editOrder.execute(id, orderData);
        res.json(order);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

export default router;