const Product = require('../models/Product');

class ProductRepository {
    async findById(id) {
        return Product.findById(id);
    }

    async findByCategory(category) {
        return Product.find({ category });
    }

    async findAll() {
        return Product.find();
    }

    async save(productData) {
        const product = new Product(productData);
        return product.save();
    }

    async update(id, productData) {
        return Product.findByIdAndUpdate(id, productData, { new: true });
    }

    async delete(id) {
        return Product.findByIdAndDelete(id);
    }
}

module.exports = new ProductRepository();
