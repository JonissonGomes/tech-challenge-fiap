import mercadoPagoAxiosInstance from "../config/mercado-pago";
import { IMercadoPagoOrder, IMercadoPagoRepository, MercadoPagoOrderDTO } from "./interfaces/IMercadoPagoRepository";

class MercadoPagoRepository implements IMercadoPagoRepository {
    async createOrder(orderId: string, mercadoPagoOrder: MercadoPagoOrderDTO): Promise<IMercadoPagoOrder> {
        if (!orderId || orderId !== mercadoPagoOrder.external_reference) {
            throw new Error('OrderId is required or do not match external reference');
        }

        const mercadoPagoAxiosInstance = (await import('../config/mercado-pago')).default;

        try {
            const response = await mercadoPagoAxiosInstance.post(
                '/instore/orders/qr/seller/collectors/178195313/pos/CAIXAFIAPTECHCHALLENGE/qrs',
                process.env.NOTIFICATION_URL
                    ? { ...mercadoPagoOrder, notification_url: process.env.NOTIFICATION_URL }
                    : mercadoPagoOrder
            );

            return {
                in_store_order_id: response.data.in_store_order_id,
                qr_data: response.data.qr_data
            };
        } catch (error) {
            console.error('Error creating MercadoPago order:', error);
            throw new Error('Failed to create MercadoPago order');
        }
    }

    async assignQRCode(qrCodeDetails: MercadoPagoOrderDTO): Promise<void> {
        try {
            const response = await mercadoPagoAxiosInstance.put(
                '/instore/orders/qr/seller/collectors/178195313/pos/CAIXAFIAPTECHCHALLENGE/qrs',
                qrCodeDetails
            );
            return;
        } catch (error) {
            console.error('Error assigning MercadoPago order:', error);
            throw new Error('Failed to assign MercadoPago order');
        }
    }

    async getPaymentDetails(orderId: string): Promise<any> {
        const mercadoPagoAxiosInstance = (await import('../config/mercado-pago')).default;

        try {
            const response = await mercadoPagoAxiosInstance.get(
                `/instore/qr/seller/collectors/178195313/pos/CAIXAFIAPTECHCHALLENGE/orders?external_reference=${orderId}`
            );

            if (!response) {
                throw new Error('Payment details not found');
            }
            return response;
        } catch (error) {
            console.error('Error fetching payment details:', error);
            throw new Error('Failed to fetch payment details');
        }
    }
}

export default MercadoPagoRepository;