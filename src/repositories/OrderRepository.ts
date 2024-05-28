import { OrderDTO } from '../domain/useCases/Order/OrderDTO';
import { IOrder } from '../interfaces/IOrder';
import { Order } from '../interfaces/models/Order';
import IOrderRepository from './interfaces/IOrderRepository';

class OrderRepository implements IOrderRepository {
    async createOrder(order: Partial<OrderDTO>): Promise<IOrder> {
        const newOrder = new Order(order);
        await newOrder.save();
        return newOrder.toObject() as IOrder;
    }

    async getOrderById(id: string): Promise<IOrder | null> {
        const order = await Order.findById(id);
        return order ? order.toObject() : null;
    }

    async updateOrder(id: string, order: OrderDTO): Promise<IOrder | null> {
        const updatedOrder = await Order.findByIdAndUpdate(id, order, { new: true });
        return updatedOrder ? updatedOrder.toObject() : null;
    }

    async deleteOrder(id: string): Promise<void> {
        await Order.findByIdAndDelete(id);
    }

    async getAll(): Promise<IOrder[] | null> {
        const orders: IOrder[] = await Order.find();
        return orders.map(order => order);
    }
}

export default OrderRepository;