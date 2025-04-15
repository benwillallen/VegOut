import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import Vegetable from './models/Vegetables';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Add a veggie
app.post('/vegetables', async (req, res) => {
  const veg = new Vegetable(req.body);
  await veg.save();
  res.send(veg);
});

// Get all veggies
app.get('/vegetables', async (req, res) => {
  const all = await Vegetable.find();
  res.send(all);
});

app.listen(3000, () => console.log('Server running on port 3000'));
