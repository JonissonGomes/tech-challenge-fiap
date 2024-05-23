import IProductRepository from "./IProductRepository";
import { ProductDTO } from "./ProductDTO";

class EditProduct {
    constructor(private productRepository: IProductRepository) { }

    async execute(id: string, productData: Omit<Partial<ProductDTO>, 'id'>): Promise<ProductDTO | null> {
        return this.productRepository.updateProduct(id, productData);
    }
}

export default EditProduct;