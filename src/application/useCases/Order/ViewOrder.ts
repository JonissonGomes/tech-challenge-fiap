import IOrderRepository from './IOrderRepository';
import { OrderDTO, OrderStatus } from './OrderDTO';

export class ViewOrder {
    constructor(private orderRepository: IOrderRepository) { }

    async execute(id: string): Promise<OrderDTO | null> {
        if (!id) {
            throw new Error('Order id is required.');
        }

        const order = await this.orderRepository.getOrder(id);

        if (!order) {
            throw new Error('Order not found.');
        }

        return order;
    }
}