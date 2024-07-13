import { OrderDTO } from '../../domain/useCases/Order/OrderDTO';
import { Order } from '../../entities/order';

interface IOrderRepository {
    getAll(): Promise<Order[] | null>;
    getOrderById(id: string): Promise<Order | null>;
    createOrder(order: OrderDTO): Promise<Order>;
    updateOrder(id: string, order: Partial<OrderDTO>): Promise<Order | null>;
    deleteOrder(id: string): Promise<void>;
}

export default IOrderRepository;