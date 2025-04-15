import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Vegetable from './models/Vegetables';
import veggies from './static/veggie_list';

dotenv.config();

mongoose.connect('mongodb://localhost:27017').then(async () => {
    await Vegetable.deleteMany();
    await Vegetable.insertMany(veggies);
    console.log('Veggies seeded!');
    process.exit();
});
