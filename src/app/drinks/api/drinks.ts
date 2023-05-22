import { Drinks } from "@/app/models/Drinks";
import { mongooseConnect } from "../../../../lib/mongoose";
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    await mongooseConnect();

    if (method === 'GET') {
        if (req.query?.id) {
            res.json(await Drinks.findOne({ _id: req.query.id }));
        } else {
            res.json(await Drinks.find());
        }
    }

    // if (method === 'POST') {
    //     const { name, null, null, null, null, null } = req.body;
    //     const drinkDoc = await Drinks.create({
    //         title, description, price, images, category, properties,
    //     })
    //     res.json(drinkDoc);
    // }

    if (method === 'PUT') {
        const { name, size, type, chocolateSauce, whippedCream, _id } = req.body;
        await Drinks.updateOne({ _id }, { name, size, type, chocolateSauce, whippedCream });
        res.json(true);
    }

    if (method === 'DELETE') {
        if (req.query?.id) {
            await Drinks.deleteOne({ _id: req.query?.id });
            res.json(true);
        }
    }
}