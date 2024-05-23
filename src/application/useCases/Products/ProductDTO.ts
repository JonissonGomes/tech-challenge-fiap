export enum ECategory {
    LANCHE = 'lanche',
    ACOMPANHAMENTO = 'acompanhamento',
    BEBIDA = 'bebida',
    SOBREMESA = 'sobremesa',
}

export interface ProductDTO {
    id: string;
    category: ECategory;
    name: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
}