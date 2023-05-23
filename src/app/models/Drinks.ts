import mongoose, { model, Schema, Model } from "mongoose";

export interface IDrink {
    _id: string;
    name: string;
    size: 'S' | 'M' | 'L' | 'XL' | null;
    type: 'Hot' | 'Cold' | 'Blended' | null;
    chocolateSauce: number;
    whippedCream: boolean;
    createdAt: Date;
    updatedAt: Date;
}
const DrinkSchema = new Schema({
    id: mongoose.Types.ObjectId,
    name: { type: String, required: true },
    size: { type: String, require: false, enum: ['S', 'M', 'L', 'XL'], default: null },
    type: { type: String, require: false, enum: ['Hot', 'Cold', 'Blended'], default: null },
    chocolateSauce: { type: Number, require: false, default: 0 },
    whippedCream: { type: Boolean, require: false, default: false },
}, {
    timestamps: true,
});
export const Drinks: Model<IDrink> = model<IDrink>('Drinks', DrinkSchema);

