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

    if (method === 'PUT') {
        const { size, type, chocolateSauce, whippedCream, _id } = req.body;
        await Drinks.updateOne({ id: _id }, { size: size, type: type, chocolateSauce: chocolateSauce, whippedCream: whippedCream });
        res.json(true);
    }
}