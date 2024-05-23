import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "./config/swagger_output.json"
import customerRoutes from './interfaces/controllers/customerRoutes';
import productRoutes from './interfaces/controllers/productRoutes';
import orderRoutes from './interfaces/controllers/orderRoutes';

const app = express();
const port = 3000;
app.use(bodyParser.json());

app.get('/', (_req: any, res: any) => {
    res.send('Heartbeat OK 💥');
});

app.use('/customer', customerRoutes);
app.use('/product', productRoutes);
app.use('/order', orderRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));

app.listen(port, () => {
    console.log(`Tech Challenge running at http://localhost:${port} 🚀`);
});