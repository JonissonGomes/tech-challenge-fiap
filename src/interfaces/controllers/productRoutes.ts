import express from 'express';

const router = express.Router();

// const productRepository = new ProductRepository(); // Add MONGODB implementation
// const createProduct = new CreateProduct(productRepository as IProductRepository);
// const viewProduct = new ViewProduct(productRepository as IProductRepository);
// const editProduct = new EditProduct(productRepository as IProductRepository);
// const deleteProduct = new DeleteProduct(productRepository as IProductRepository);

router.post('/', async (req, res) => {
    try {
        const productData = req.body;
        // const product = await createProduct.execute(productData);
        // res.status(201).json(product);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        // const product = await viewProduct.execute(id);
        // res.json(product);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/category/:category', async (req, res) => {
    try {
        const category = req.params.category;
        // const products = await viewProduct.executeByCategory(category);
        // res.json(products);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const productData = req.body;
        // const product = await editProduct.execute(id, productData);
        // res.json(product);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        // await deleteProduct.execute(id);
        res.json({ message: 'Product deleted' });
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

export default router;