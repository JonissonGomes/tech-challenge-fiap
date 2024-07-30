import express from 'express';

import OrderRepository from '../repositories/OrderRepository';
import HandleMercadoPagoWebhook from '../domain/useCases/Payment/handleMercadoPagoWebhook';
import MercadoPagoWebhookController from '../controllers/order/mercadoPago/webhook';
import MercadoPagoRepository from '../repositories/MercadoPagoRepository';

const router = express.Router();

const orderRepository = new OrderRepository();
const mercadoPagoRepository = new MercadoPagoRepository();

const handleMercadoPagoWebhook = new HandleMercadoPagoWebhook(orderRepository, mercadoPagoRepository);
const mercadoPagoWebhookController = new MercadoPagoWebhookController(handleMercadoPagoWebhook);

router.post('/mercadopago', (req, res) => mercadoPagoWebhookController.handle(req, res));

export default router;