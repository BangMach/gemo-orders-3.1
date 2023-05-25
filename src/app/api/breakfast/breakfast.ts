import { NextApiRequest, NextApiResponse } from 'next';

import { Breakfast } from "@/app/models/Breakfast";
import { mongooseConnect } from "../../../../lib/mongoose";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    await mongooseConnect();
 
    if (method === 'GET') {
        if (req.query?.id) {
            res.json(await Breakfast.findOne({ _id: req.query.id }));
        } else {
            res.json(await Breakfast.find());
        }
    }

    if (method === 'PUT') {
        const { foodType, foodOption, _id } = req.body;
        await Breakfast.updateOne({ id: _id }, { foodType: foodType, foodOption: foodOption });
        res.json(true);
    }
}