import { ICustomer } from "../interfaces/ICustomer";

export interface ProductDTO {
    category: ECategory;
    name: string;
    price: number;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
    isDeleted: boolean;
}

export enum OrderStatus {
    RECEBIDO = 'recebido',
    PREPARANDO = 'preparando',
    PRONTO = 'pronto',
    FINALIZADO = 'finalizado',
}

export enum ECategory {
    LANCHE = 'lanche',
    ACOMPANHAMENTO = 'acompanhamento',
    BEBIDA = 'bebida',
    SOBREMESA = 'sobremesa',
}

export interface Combo {
    [ECategory.LANCHE]?: ProductDTO;
    [ECategory.ACOMPANHAMENTO]?: ProductDTO;
    [ECategory.BEBIDA]?: ProductDTO;
    [ECategory.SOBREMESA]?: ProductDTO;
}

interface OrderData {
    _id?: string;
    combo: Combo;
    customer?: ICustomer;
    status: OrderStatus;
    createdAt: Date;
    updatedAt: Date;
}


export class Order {
    readonly #_id;
    readonly #combo;
    readonly #status;
    readonly #customer;
    readonly #createdAt;
    readonly #updatedAt;

    
    constructor({ combo, status, _id, customer, createdAt, updatedAt }:OrderData) {
        this.#_id = _id
        this.#combo = combo;
        this.#status = status;
        this.#customer = customer;
        this.#createdAt = createdAt;
        this.#updatedAt = updatedAt;
    }
    get _id(): string | undefined {
        return this.#_id
    }
    get combo(): Combo {
        return this.#combo
    }

    get status(): OrderStatus {
        return this.#status
    }
    
    get customer(): ICustomer | undefined {
        return this.#customer
    }

       
    get createdAt(): Date {
        return this.#createdAt
    }

       
    get updatedAt(): Date {
        return this.#updatedAt
    }
}