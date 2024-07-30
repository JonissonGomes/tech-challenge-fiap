export interface MercadoPagoOrderDTO {
    total_amount: number;
    external_reference: string;
    cash_out: {
        amount: number;
    }
    title: string;
    description: string;
}

export interface IMercadoPagoOrder {
    in_store_order_id: string;
    qr_data: string;
}

export interface IMercadoPagoRepository {
    createOrder(orderId: string, mercadoPagoOrder: MercadoPagoOrderDTO): Promise<IMercadoPagoOrder>;
    assignQRCode(qrCodeDetails: MercadoPagoOrderDTO): Promise<void>;
    getPaymentDetails(paymentId: string): Promise<any>;
}