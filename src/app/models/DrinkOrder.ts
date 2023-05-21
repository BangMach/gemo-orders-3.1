import mongoose from "mongoose";

const drinkOrderSchema = new mongoose.Schema({
  drink: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Drink'
  },
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  }
});