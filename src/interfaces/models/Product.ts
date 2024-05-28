import mongoose, { Model } from 'mongoose';
import { IProduct } from '../IProduct';

interface ProductDocument extends Omit<IProduct, '_id'>, Document { }

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    isDelete: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, required: true, default: Date.now() },
    updatedAt: { type: Date, required: true, default: Date.now() },
});

const Product: Model<ProductDocument> = mongoose.model<ProductDocument>('Product', ProductSchema);

export { Product, ProductSchema }
