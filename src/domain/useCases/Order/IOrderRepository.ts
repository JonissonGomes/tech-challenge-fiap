import { OrderDTO } from './OrderDTO';

interface IOrderRepository {
    getOrder(id: string): Promise<OrderDTO | null>;
    createOrder(order: OrderDTO): Promise<OrderDTO>;
    updateOrder(id: string, order: Omit<Partial<OrderDTO>, 'id'>): Promise<OrderDTO | null>;
    deleteOrder(id: string): Promise<void>;
}

export default IOrderRepository;