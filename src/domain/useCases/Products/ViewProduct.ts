import IProductRepository from './IProductRepository';
import { ProductDTO, ECategory } from './ProductDTO';

class ViewProduct {
    constructor(private productRepository: IProductRepository) { }

    async execute(id: string): Promise<ProductDTO | null> {
        return this.productRepository.getProduct(id);
    }

    async executeByCategory(category: ECategory): Promise<ProductDTO[]> {
        return this.productRepository.getProductsByCategory(category);
    }
}

export default ViewProduct;