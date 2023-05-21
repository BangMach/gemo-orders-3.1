import mongoose, { model, Schema, models } from "mongoose";

const OrderSchema = new Schema({
    id: mongoose.Types.ObjectId,
    price: Number,
    drink: { type: mongoose.Types.ObjectId, ref: 'Drinks' },
    breakfast: { type: mongoose.Types.ObjectId, ref: 'Breakfast' },
}, {
    timestamps: true,
});
export const Breakfast = models.Breakfast || model('Breakfast', OrderSchema);