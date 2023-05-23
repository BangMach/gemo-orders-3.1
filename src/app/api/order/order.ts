import { Drinks } from "@/app/models/Drinks";
import { mongooseConnect } from "../../../../lib/mongoose";
import { NextApiRequest, NextApiResponse } from 'next';
import { Order } from "@/app/models/Order";

export default async function handleOrder(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    await mongooseConnect();

    if (method === 'GET') {
        if (req.query?.id) {
            res.json(await Order.findOne({ _id: req.query.id }));
        } else {
            res.json(await Order.find());
        }
    }

    if (method === 'POST') {
        const { drink, breakfasts } = req.body;
        const drinkDoc = await Order.create({
            drinks: drink, status: "In Progress", breakfasts: breakfasts
        })
        res.json(drinkDoc);
    }

    if (method === 'PUT') {
        const { _id } = req.body;
        await Order.updateOne({ _id }, { status: "Complete" });
        res.json(true);
    }

}