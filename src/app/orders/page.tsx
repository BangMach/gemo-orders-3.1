import mongoose from "mongoose"
import LayOut from "../components/layout"
import clientPromise from "../lib/mongodb"

export default function Orders() {
  return (
    <>
      <LayOut>Orders</LayOut>
    </>
  )
}
export default function handle(req, res) {
  const { method } = req
  mongoose.Promise = clientPromise

  if (method === "GET") {
    res.json(await Order.find())
  }
  if (method === "POST") {
    const { name, parentOrder } = req.body
    co
  }
}
