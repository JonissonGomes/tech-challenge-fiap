import IProductRepository from './IProductRepository';

class DeleteProduct {
    constructor(private productRepository: IProductRepository) { }

    async execute(id: string): Promise<void> {
        return this.productRepository.deleteProduct(id);
    }
}

export default DeleteProduct;