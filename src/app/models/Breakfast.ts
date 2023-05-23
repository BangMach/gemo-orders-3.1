import mongoose from "mongoose";

const breakfastSchema = new mongoose.Schema({
  foodType: {
    type: String,
    enum: ['Sandwich', 'Bagel', 'NULL'],
    default: 'NULL'
  },
  foodOption: {
    type: String,
    enum: ['Egg', 'Turkey', 'Butter', 'CreamCheese', 'NULL'],
    default: 'NULL'
  },
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BreakfastOrder'
  }]
});

export const Breakfast = mongoose.model('Breakfast', breakfastSchema);

