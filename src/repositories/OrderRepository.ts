import { OrderDTO } from '../domain/useCases/Order/OrderDTO';
import { Order as OrderEntity } from '../entities/order';
import { IOrder } from '../interfaces/IOrder';
import { Order } from '../interfaces/models/Order';
import IOrderRepository from './interfaces/IOrderRepository';

class OrderRepository implements IOrderRepository {
    async createOrder(order: Partial<OrderDTO>): Promise<OrderEntity> {
        const newOrder = new Order(order);
        await newOrder.save();
        return new OrderEntity(newOrder.toObject());
    }

    async getOrderById(id: string): Promise<OrderEntity | null> {
        const order = await Order.findById(id);
        return order ? new OrderEntity(order.toObject()) : null;
    }

    async updateOrder(id: string, order: OrderDTO): Promise<OrderEntity | null> {
        const updatedOrder = await Order.findByIdAndUpdate(id, order, { new: true });
        return updatedOrder ? new OrderEntity(updatedOrder.toObject()) : null;
    }

    async deleteOrder(id: string): Promise<void> {
        await Order.findByIdAndDelete(id);
    }

    async getAll(): Promise<OrderEntity[] | null> {
        const orders: IOrder[] = await Order.find();
        return orders.map(order => new OrderEntity(order));
    }
}

export default OrderRepository;