import { ECategory, ProductDTO } from "../Products/ProductDTO";

export enum OrderStatus {
    RECEBIDO = 'recebido',
    PREPARANDO = 'preparando',
    PRONTO = 'pronto',
    FINALIZADO = 'finalizado',
}

// Cada combo pode ter um produto de cada category de produtos.
// Temos uma redundancia na categoria. Visto que {lanche: {...product, category: lanche}}
export interface Combo {
    [ECategory.LANCHE]?: ProductDTO;
    [ECategory.ACOMPANHAMENTO]?: ProductDTO;
    [ECategory.BEBIDA]?: ProductDTO;
    [ECategory.SOBREMESA]?: ProductDTO;
}

export interface OrderDTO {
    id: string;
    customerId?: string;
    combo: Combo;
    status: OrderStatus;
    createdAt: Date;
    updatedAt: Date;
}