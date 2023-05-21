import mongoose from "mongoose";

const drinkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  drinkType: {
    type: String,
    enum: ['Hot', 'Cold', 'Blended', 'NULL'],
    default: 'NULL'
  },
  drinkSize: {
    type: String,
    enum: ['S', 'M', 'L', 'XL', 'NULL'],
    default: 'NULL'
  },
  milkOption: {
    type: String,
    enum: ['WholeMilk', 'AlmondMilk', 'NULL'],
    default: 'NULL'
  },
  chocolateSauce: Number,
  whippedCream: Boolean,
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DrinkOrder'
  }]
});
