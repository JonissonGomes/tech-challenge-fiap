import { Request, Response } from 'express';
import HandleMercadoPagoWebhook from '../../../domain/useCases/Payment/handleMercadoPagoWebhook';

export default class MercadoPagoWebhookController {
    constructor(private handleMercadoPagoWebhook: HandleMercadoPagoWebhook) { }

    async handle(req: Request, res: Response): Promise<void> {
        try {
            await this.handleMercadoPagoWebhook.execute(req.body);
            res.status(200).send('Webhook processed successfully');
        } catch (error) {
            console.error('Error processing Mercado Pago webhook:', error);
            res.status(500).send('Error processing webhook');
        }
    }
}
