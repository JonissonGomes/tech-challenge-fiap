import { OrderDTO } from '../../domain/useCases/Order/OrderDTO';
import { IOrder } from '../../interfaces/IOrder';

interface IOrderRepository {
    getAll(): Promise<IOrder[] | null>;
    getOrderById(id: string): Promise<IOrder | null>;
    createOrder(order: OrderDTO): Promise<IOrder>;
    updateOrder(id: string, order: Partial<OrderDTO>): Promise<IOrder | null>;
    deleteOrder(id: string): Promise<void>;
}

export default IOrderRepository;