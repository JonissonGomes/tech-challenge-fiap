import IOrderRepository from "./IOrderRepository";
import { OrderDTO, OrderStatus } from "./OrderDTO";

export class EditOrder {
    constructor(private orderRepository: IOrderRepository) { }

    async execute(id: string, order: Omit<OrderDTO, 'id'>): Promise<OrderDTO | null> {
        if (!id) {
            throw new Error('Order id is required.');
        }

        if (!order) {
            throw new Error('Order object is required.');
        }

        return this.orderRepository.updateOrder(id, order);
    }
}