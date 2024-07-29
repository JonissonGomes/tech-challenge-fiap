import CreateOrder from '../../domain/useCases/Order/CreateOrder';
import ViewOrder from '../../domain/useCases/Order/ViewOrder';
import EditOrder from '../../domain/useCases/Order/EditOrder';
import IOrderRepository from '../../repositories/interfaces/IOrderRepository';

import { Combo, OrderStatus } from '../../entities/order';

export class OrderController {
    readonly createOrderUseCase: CreateOrder
    readonly viewOrderUseCases:ViewOrder
    readonly editOrderUseCase:EditOrder
    constructor(orderRepository: IOrderRepository){
        this.createOrderUseCase = new CreateOrder(orderRepository as IOrderRepository);
        this.viewOrderUseCases = new ViewOrder(orderRepository as IOrderRepository);
        this.editOrderUseCase = new EditOrder(orderRepository as IOrderRepository);
    }
    
    async createOrder({ customerId, combo }: {customerId: string, combo: Combo}) {
        const order = await this.createOrderUseCase.execute({customerId, combo });
        return order;
    }

    async viewAllOrders() {
        const order = await this.viewOrderUseCases.executeAll();
        return order;
    }

    async viewOrder({id}: {id: string}) {
        const order = await this.viewOrderUseCases.execute(id);
        return order;
    }

    async editOrder({id, orderData}:{id: string, orderData: {
        combo: Combo;
        status: OrderStatus;
    }  }){
        const order = await this.editOrderUseCase.execute(id, orderData);
        return order;
    }

}