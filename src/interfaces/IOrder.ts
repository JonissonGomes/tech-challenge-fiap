import { Combo, OrderStatus } from "../domain/useCases/Order/OrderDTO";
import { ICustomer } from "./ICustomer";
import { IProduct } from "./IProduct";

export interface IOrder {
    _id?: string;
    combo: Combo;
    customer?: ICustomer;
    status: OrderStatus;
    createdAt: Date;
    updatedAt: Date;
}