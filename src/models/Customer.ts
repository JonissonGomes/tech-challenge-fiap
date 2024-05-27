import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
    cpf: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
});

export default mongoose.model('Customer', CustomerSchema);
