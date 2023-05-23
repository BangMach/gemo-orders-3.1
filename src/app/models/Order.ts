import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  drinks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DrinkOrder'
  }],
  breakfasts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BreakfastOrder'
  }],
  totalPrice: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['InProgress', 'Completed', 'Discarded'],
    default: 'InProgress'
  }
});
export const Order = mongoose.model('Order', orderSchema);
