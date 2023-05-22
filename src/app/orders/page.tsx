"use client"

import mongoose from "mongoose"
import LayOut from "../components/layout"
import clientPromise from "../lib/mongodb"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Orders() {
  const orderSamples = [
    {
      _id: "1",
      name: "Order 1",
      status: "Completed",
      drinks: ["Latte", "Espresso"],
      breakfast: "Bagel",
      totalPrice: 10.99,
    },
    {
      _id: "2",
      name: "Order 2",
      status: "InProgress",
      drinks: ["Cappuccino", "Iced Coffee"],
      breakfast: "Sandwich",
      totalPrice: 15.99,
    },
    {
      _id: "3",
      name: "Order 3",
      status: "Discarded",
      drinks: ["Mocha"],
      breakfast: "NULL",
      totalPrice: 7.99,
    },
  ]
  const [orders, setOrders] = useState([])
  useEffect(() => {
    axios.get("/api/orders").then((response) => {
      setOrders
    })
  })
  return (
    <>
      <LayOut>
        <div>Orders</div>
        <table className="basic mt-4">
          <thead>
            <tr>
              <td>Order name</td>
              <td>Order Status</td>
              <td>Drink Orders</td>
              <td>Breakfast Order</td>
              <td>Total Price</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {orderSamples?.length > 0 &&
              orderSamples.map((order) => (
                <tr key={order._id}>
                  <td>{order.name}</td>
                  <td>{order.status}</td>
                  <td>{order.drinks}</td>
                  <td>{order.breakfast}</td>
                  <td>{order.totalPrice}</td>
                  <td>
                    <button
                      //onClick={() => editCategory(category)}
                      className="btn-default mr-1"
                    >
                      Edit
                    </button>
                    <button
                      //onClick={() => deleteCategory(category)}
                      className="btn-red"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </LayOut>
    </>
  )
}
// export default function handle(req, res) {
//   const { method } = req
//   mongoose.Promise = clientPromise

//   if (method === "GET") {
//     //res.json(await Oder.find())
//   }
//   if (method === "POST") {
//     const { name, parentOrder } = req.body
//     co
//   }
// }
