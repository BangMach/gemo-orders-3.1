import mongoose from "mongoose";

const breakfastOrderSchema = new mongoose.Schema({
  breakfast: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Breakfast'
  },
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  }
});
const BreakfastOrder = mongoose.model('BreakfastOrder', breakfastOrderSchema);
module.exports = {BreakfastOrder};
