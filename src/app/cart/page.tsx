"use client"

import React, { Component } from "react"

const sampleData = [
  {
    id: 1,
    type: "Coffee",
    drink: "Latte",
    size: "Medium",
    hasWhippingCream: true,
    milkOption: "Almond Milk",
    chocolateSaucePumps: 1,
    quantity: 1,
    price: 4.99,
  },
  {
    id: 2,
    drink: false,
    food: "Sandwich",
    additionalFoods: ["Chips", "Cookie"],
    quantity: 1,
    price: 8.99,
  },
  // Add more sample data as needed
]
class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: {
        items: [],
        status: "",
        id: "",
        cartPrice: {
          totalCartPrice: 0,
          tax: 0,
          totalCartPriceAfterTax: 0,
        },
      },
      locale: "en",
    }
  }

  addToCart = (item) => {}

  updateCartTotalPrice = () => {}

  handleRemoveCartItem = (id) => {}

  handleClearCart = () => {}

  handleAddToOrder = () => {}
  totalPrice = sampleData.reduce((total, item) => total + item.price, 0)

  render() {
    //const { cart } = this.state
    //const { items } = sampleData;

    return (
      <div className="container border rounded">
        <h2 style={{ marginTop: "15px" }}>Cart Info</h2>

        <table className="table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sampleData.map((item) => (
              <tr key={item.id}>
                <td>
                  <p>
                    Drink: {item.type} {item.drink}: size {item.size}
                    {item.hasWhippingCream && ", has whipping cream"}
                    {item.milkOption !== "none" && `, ${item.milkOption}`}
                    {item.chocolateSaucePumps! > 0 &&
                      `, ${item.chocolateSaucePumps} chocolate sauce`}
                  </p>
                </td>

                <td>{item.quantity}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleRemoveCartItem(item.id)}
                  ></button>
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total Price:</td>
              <td></td>
              <td>${}</td>
              <td></td>
            </tr>
            <tr>
              <td>Tax:</td>
              <td></td>
              <td>${}</td>
              <td></td>
            </tr>
            <tr>
              <td>Total Price After Tax:</td>
              <td></td>
              <td>${}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  }
}

export default Cart
