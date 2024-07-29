import express, { Request, Response } from 'express';
import OrderRepository from '../repositories/OrderRepository';
import { OrderController } from '../controllers/order/orderController';

const router = express.Router();

const orderRepository = new OrderRepository();
router.post('/', async (req: Request, res: Response) => {
    try {
        const orderData = req.body;
        const order = await new OrderController(orderRepository).createOrder(orderData);
        res.status(201).json(order);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/', async (req: Request, res: Response) => {
    try {
        const orders = await new OrderController(orderRepository).viewAllOrders();
        res.json(orders);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const order = await new OrderController(orderRepository).viewOrder({id});
        res.json(order);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

router.put('/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const orderData = req.body;
        const order = await new OrderController(orderRepository).editOrder({id, orderData});
        res.json(order);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

export default router;