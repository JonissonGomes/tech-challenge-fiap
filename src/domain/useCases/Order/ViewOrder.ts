import { Order } from '../../../entities/order';
import IOrderRepository from '../../../repositories/interfaces/IOrderRepository';

export default class ViewOrder {
    constructor(private orderRepository: IOrderRepository) { }

    async execute(id: string): Promise<Order> {
        if (!id) {
            throw new Error('Order id is required.');
        }

        const order = await this.orderRepository.getOrderById(id);

        if (!order) {
            throw new Error('Order not found.');
        }

        return new Order(order);
    }

    async executeAll(): Promise<Order[]> {
        const orders = await this.orderRepository.getAll();
        return orders?.map((order) => new Order(order)) || [];
    }
}