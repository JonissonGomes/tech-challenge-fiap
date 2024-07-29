import { Order } from "../../../entities/order";
import IOrderRepository from "../../../repositories/interfaces/IOrderRepository";
import { OrderDTO } from "./OrderDTO";

export default class EditOrder {
    constructor(private orderRepository: IOrderRepository) { }

    async execute(id: string, order: Omit<OrderDTO, 'updatedAt' | 'createdAt'>): Promise<Order | null> {
        if (!id) {
            throw new Error('Order id is required.');
        }

        if (!order) {
            throw new Error('Order object is required.');
        }

        return this.orderRepository.updateOrder(id, { ...order, updatedAt: new Date() });
        
    }
}