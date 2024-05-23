import IOrderRepository from './IOrderRepository';
import { OrderDTO, Combo, OrderStatus } from './OrderDTO';

interface ICreateOrder {
    customerId: string;
    combo: Combo;
}

class CreateOrder {
    constructor(private orderRepository: IOrderRepository) { }

    async execute(orderData: ICreateOrder): Promise<OrderDTO> {
        if (!orderData.combo || Object.keys(orderData.combo).length === 0) {
            throw new Error('Order must contain a combo.');
        }

        if (!Object.values(orderData.combo).every(value => value.id)) {
            throw new Error('Combo cannot be empty');
        }

        const createdAt = new Date();
        const updatedAt = createdAt;
        const order: OrderDTO = {
            id: '', // TODO: Should this be a random number? And then, MongoDb creates its ObjectId and we reference it when updating and getting the order?
            ...orderData,
            status: OrderStatus.RECEBIDO,
            createdAt,
            updatedAt
        };

        return this.orderRepository.createOrder(order);
    }
}

export default CreateOrder;