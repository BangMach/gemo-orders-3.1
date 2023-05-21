import mongoose, { Document, model, Model, Schema } from 'mongoose';

interface IBreakfast extends Document {
    id: string;
    name: string;
    topping?: 'Butter' | 'Egg' | 'Turkey' | 'CreamCheese' | null;
    order?: mongoose.Types.ObjectId | string;
    createdAt: Date;
    updatedAt: Date;
}

const BreakfastSchema = new Schema<IBreakfast>({
    name: { type: String, required: true },
    topping: { type: String, required: false, enum: ['Butter', 'Egg', 'Turkey', 'CreamCheese'], default: null },
    order: { type: Schema.Types.ObjectId, ref: 'Order' },
}, {
    timestamps: true,
});

const Breakfast: Model<IBreakfast> = model<IBreakfast>('Breakfast', BreakfastSchema);

export default Breakfast;
