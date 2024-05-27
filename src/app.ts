import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "./config/swagger_output.json"
import customerRoutes from './interfaces/controllers/customerRoutes';
import productRoutes from './interfaces/controllers/productRoutes';
import orderRoutes from './interfaces/controllers/orderRoutes';

// const express = require('express');
const connectDB = require('./config/mongo');
const customerController = require('./controllers/CustomerController');
const productController = require('./controllers/ProductController');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.json());

connectDB();

app.get('/', (_req: any, res: any) => {
    res.send('Heartbeat OK 💥');
});

app.use('/customer', customerRoutes);
app.use('/product', productRoutes);
app.use('/order', orderRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));

// Customer routes
app.post('/api/customers', customerController.registerCustomer);
app.get('/api/customers/:id', customerController.getCustomerById);
app.get('/api/customers/cpf/:cpf', customerController.getCustomerByCpf);
app.put('/api/customers/:id', customerController.updateCustomer);
app.delete('/api/customers/:id', customerController.deleteCustomer);

// Product routes
app.post('/api/products', productController.addProduct);
app.get('/api/products/:id', productController.getProductById);
app.get('/api/products', productController.getAllProducts);
app.put('/api/products/:id', productController.updateProduct);
app.delete('/api/products/:id', productController.deleteProduct);

app.listen(port, () => {
    console.log(`Tech Challenge running at http://localhost:${port} 🚀`);
});