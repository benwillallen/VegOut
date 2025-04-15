import mongoose from 'mongoose';

const VegetableSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, default: 'A healthy and nutritious vegetable.' },
    rating: { type: Number, default: 0 } 
});

const Vegetable = mongoose.model('Vegetable', VegetableSchema);
export default Vegetable;