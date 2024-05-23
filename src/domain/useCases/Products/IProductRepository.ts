import { ProductDTO, ECategory } from './ProductDTO';

interface IProductRepository {
    getProduct(id: string): Promise<ProductDTO | null>;
    getProductsByCategory(category: ECategory): Promise<ProductDTO[]>;
    createProduct(product: ProductDTO): Promise<ProductDTO>;
    updateProduct(id: string, product: Omit<Partial<ProductDTO>, 'id'>): Promise<ProductDTO | null>;
    deleteProduct(id: string): Promise<void>;
}

export default IProductRepository;