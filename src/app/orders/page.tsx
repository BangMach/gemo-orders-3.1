import LayOut from "../components/layout"

export default function Orders() {
  return (
    <>
      <LayOut>Orders</LayOut>
    </>
  )
}
export default async function handle(req, res) {
  const { method } = req
  if (method === "GET") {
    res.json(await Order.find())
  }
  if (method === "POST") {
    const { name, parentOrder } = req.body
    co
  }
}
