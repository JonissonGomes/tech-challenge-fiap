import { Combo, Order, OrderStatus, PaymentStatus } from '../../../entities/order';
import IOrderRepository from '../../../repositories/interfaces/IOrderRepository';
import { OrderDTO } from './OrderDTO';

interface ICreateOrder {
    customerId: string;
    combo: Combo;
}

class CreateOrder {
    constructor(private orderRepository: IOrderRepository) { }

    async execute(orderData: ICreateOrder): Promise<Order> {
        if (!orderData.combo || Object.keys(orderData.combo).length === 0) {
            throw new Error('Order must contain a combo.');
        }

        if (!Object.values(orderData.combo).every(value => value)) {
            throw new Error('Combo cannot be empty');
        }

        const createdAt = new Date();
        const updatedAt = createdAt;

        // Calculate total price
        const total = Object.values(orderData.combo).reduce((sum, item) => {
            return sum + (item?.price || 0);
        }, 0);

        const order: OrderDTO = {
            ...orderData,
            total,
            status: OrderStatus.RECEBIDO,
            paymentStatus: PaymentStatus.PENDENTE,
            createdAt,
            updatedAt
        };

        const createdOrder = await this.orderRepository.createOrder(order);
        return new Order(createdOrder)
    }
}

export default CreateOrder;