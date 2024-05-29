import { IOrder } from '../../../interfaces/IOrder';
import IOrderRepository from '../../../repositories/interfaces/IOrderRepository';
import { OrderDTO, Combo, OrderStatus } from './OrderDTO';

interface ICreateOrder {
    customerId: string;
    combo: Combo;
}

class CreateOrder {
    constructor(private orderRepository: IOrderRepository) { }

    async execute(orderData: ICreateOrder): Promise<IOrder> {
        if (!orderData.combo || Object.keys(orderData.combo).length === 0) {
            throw new Error('Order must contain a combo.');
        }

        if (!Object.values(orderData.combo).every(value => value)) {
            throw new Error('Combo cannot be empty');
        }   

        const createdAt = new Date();
        const updatedAt = createdAt;
        const order: OrderDTO = {
            ...orderData,
            status: OrderStatus.RECEBIDO,
            createdAt,
            updatedAt
        };

        return this.orderRepository.createOrder(order);
    }
}

export default CreateOrder;