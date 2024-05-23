import IProductRepository from './IProductRepository';
import { ProductDTO } from './ProductDTO';

class CreateProduct {
    constructor(private productRepository: IProductRepository) { }

    async execute(productData: Omit<ProductDTO, 'id' | 'createdAt' | 'updatedAt' | 'isDeleted'>): Promise<ProductDTO> {
        const createdAt = new Date();
        const updatedAt = createdAt;
        const customer: ProductDTO = {
            id: '', // Lets us a UUID generator here
            ...productData,
            createdAt,
            updatedAt,
            isDeleted: false
        };

        return this.productRepository.createProduct(customer);
    }
}

export default CreateProduct;