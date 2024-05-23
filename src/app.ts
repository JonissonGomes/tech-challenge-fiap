import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

// const orderRepository = new OrderRepository(); // Add MONGODB implementation
// const createOrder = new CreateOrder(orderRepository as IOrderRepository);
// const viewOrder = new ViewOrder(orderRepository as IOrderRepository);
// const editOrder = new EditOrder(orderRepository as IOrderRepository);

// const productRepository = new ProductRepository(); // Add MONGODB implementation
// const createProduct = new CreateProduct(productRepository as IProductRepository);
// const viewProduct = new ViewProduct(productRepository as IProductRepository);
// const editProduct = new EditProduct(productRepository as IProductRepository);
// const deleteProduct = new DeleteProduct(productRepository as IProductRepository);

// const customerRepository = new CustomerRepository(); // Add MONGODB implementation
// const createCustomer = new CreateCustomer(customerRepository as ICustomerRepository);
// const viewCustomer = new ViewCustomer(customerRepository as ICustomerRepository);

app.get('/', (_req: any, res: any) => {
    res.send('Heartbeat OK 💥');
});

app.post('/order', async (req, res) => {
    try {
        const orderData = req.body;
        // const order = await createOrder.execute(orderData);
        // res.status(201).json(order);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

app.get('/order/:id', async (req, res) => {
    try {
        const id = req.params.id;
        // const order = await viewOrder.execute(id);
        // res.json(order);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

app.put('/order/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const orderData = req.body;
        // const order = await editOrder.execute(id, orderData);
        // res.json(order);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
})

app.post('/product', async (req, res) => {
    try {
        const productData = req.body;
        // const product = await createProduct.execute(productData);
        // res.status(201).json(product);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

app.get('/product/:id', async (req, res) => {
    try {
        const id = req.params.id;
        // const product = await viewProduct.execute(id);
        // res.json(product);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

app.get('/product/category/:category', async (req, res) => {
    try {
        const category = req.params.category;
        // const products = await viewProduct.executeByCategory(category);
        // res.json(products);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }

});

app.put('/product/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const productData = req.body;
        // const product = await editProduct.execute(id, productData);
        // res.json(product);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

app.delete('/product/:id', async (req, res) => {
    try {
        const id = req.params.id;
        // await deleteProduct.execute(id);
        res.json({ message: 'Product deleted' });
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

app.post('/customer', async (req, res) => {
    try {
        const customerData = req.body;
        // const customer = await createCustomer.execute(customerData);
        // res.status(201).json(customer);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

app.get('/customer/:id', async (req, res) => {
    try {
        const id = req.params.id;
        // const customer = await viewCustomer.executeById(id);
        // res.json(customer);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

app.get('/customer/cpf/:cpf', async (req, res) => {
    try {
        const cpf = req.params.cpf;
        // const customer = await viewCustomer.executeByCPF(cpf);
        // res.json(customer);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

app.get('/customer/email/:email', async (req, res) => {
    try {
        const email = req.params.email;
        // const customer = await viewCustomer.executeByEmail(email);
        // res.json(customer);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

app.listen(3000, () => {
    console.log(`Tech Challenge running at http://localhost:${port} 🚀`);
});