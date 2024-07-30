import { OrderStatus, PaymentStatus } from "../../../entities/order";
import { IMercadoPagoRepository } from "../../../repositories/interfaces/IMercadoPagoRepository";
import IOrderRepository from "../../../repositories/interfaces/IOrderRepository";

export default class HandleMercadoPagoWebhook {
    constructor(private orderRepository: IOrderRepository, private mercadoPagoRepository: IMercadoPagoRepository) { }

    async execute(orderId: string): Promise<void> {
        const paymentDetails = await this.fetchPaymentDetails(orderId);
        await this.updateOrderStatus(paymentDetails);

    }

    private async fetchPaymentDetails(paymentId: string): Promise<any> {
        const paymentDetails = await this.mercadoPagoRepository.getPaymentDetails(paymentId);
        return paymentDetails;
    }

    private async updateOrderStatus(paymentDetails: any): Promise<void> {
        const orderId = paymentDetails.external_reference;
        const status = paymentDetails.status;

        const mappedOrderStatus = this.mapPaymentStatusToOrderStatus(status);
        if (mappedOrderStatus === "UNKNOWN") {
            throw new Error("Status desconhecido");
        }

        const { paymentOrderStatus, orderStatus } = mappedOrderStatus;

        await this.orderRepository.updateOrderStatus(orderId, { paymentStatus: paymentOrderStatus, status: orderStatus });
    }

    private mapPaymentStatusToOrderStatus(paymentStatus: string): { paymentOrderStatus: PaymentStatus, orderStatus: OrderStatus } | "UNKNOWN" {
        switch (paymentStatus) {
            case 'approved': return ({ paymentOrderStatus: PaymentStatus.PAGO, orderStatus: OrderStatus.PREPARANDO });
            case 'pending': return ({ paymentOrderStatus: PaymentStatus.PENDENTE, orderStatus: OrderStatus.RECEBIDO });
            case 'rejected': return ({ paymentOrderStatus: PaymentStatus.CANCELADO, orderStatus: OrderStatus.FINALIZADO });
            default: return 'UNKNOWN';
        }
    }
}