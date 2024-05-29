import { IOrder } from '../../../interfaces/IOrder';
import IOrderRepository from '../../../repositories/interfaces/IOrderRepository';
import { OrderDTO, OrderStatus } from './OrderDTO';

export default class ViewOrder {
    constructor(private orderRepository: IOrderRepository) { }

    async execute(id: string): Promise<IOrder | null> {
        if (!id) {
            throw new Error('Order id is required.');
        }

        const order = await this.orderRepository.getOrderById(id);

        if (!order) {
            throw new Error('Order not found.');
        }

        return order;
    }

    async executeAll(): Promise<IOrder[] | null> {
        const orders = await this.orderRepository.getAll();
        return orders;
    }
}