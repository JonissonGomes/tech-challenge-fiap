import { ECategory, ProductDTO } from "../Products/ProductDTO";

export enum OrderStatus {
    RECEBIDO = 'recebido',
    PREPARANDO = 'preparando',
    PRONTO = 'pronto',
    FINALIZADO = 'finalizado',
}

export interface Combo {
    [ECategory.LANCHE]?: ProductDTO;
    [ECategory.ACOMPANHAMENTO]?: ProductDTO;
    [ECategory.BEBIDA]?: ProductDTO;
    [ECategory.SOBREMESA]?: ProductDTO;
}

export interface OrderDTO {
    customerId?: string;
    combo: Combo;
    status: OrderStatus;
    createdAt: Date;
    updatedAt: Date;
}