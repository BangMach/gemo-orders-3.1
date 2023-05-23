/* eslint-disable react-hooks/rules-of-hooks */

import LayOut from "../../components/layout"
import ProductBox from "../../components/productBox"
import { StyledProductsGrid } from "../../components/productGrid"
import { useState } from "react"

// Sample product data
const drinks = [
  {
    _id: 1,
    description: "drinks",
    title: "Hot Coffee",
    price: 10.99,
    images:
      "https://product.hstatic.net/1000287491/product/4._ca_phe_sua_da.jpg",
  },
  {
    _id: 2,
    title: "Hot Coffee",
    description: "drinks",
    price: 19.99,
    images:
      "https://product.hstatic.net/1000287491/product/4._ca_phe_sua_da.jpg",
  },
  {
    _id: 3,
    title: "Cold Milktea",
    description: "drinks",

    price: 14.49,
    images:
      "https://product.hstatic.net/1000287491/product/4._ca_phe_sua_da.jpg",
  },
  {
    _id: 2,
    title: "Blended Milk Tea",
    description: "drinks",
    price: 19.99,
    images:
      "https://product.hstatic.net/1000287491/product/4._ca_phe_sua_da.jpg",
  },
]

const TYPE_DRINKS_BASE_PRICES = {
  coffee: 2,
  milk_tea: 2.25,
}

const TYPE_ADJUSTMENTS = {
  hot: 0,
  cold: 0,
  blended: 1,
}

const SIZE_ADJUSTMENTS = {
  S: 0,
  M: 0.5,
  L: 1,
  XL: 1.5,
}

const MILK_OPTION_ADJUSTMENTS = {
  none: 0,
  whole_milk: 0,
  almond_milk: 0.5,
}

const WHIPPING_CREAM_ADJUSTMENT = 0.5

const CHOCOLATE_SAUCE_PUMP_PRICE = 0.5
const MAX_CHOCOLATE_SAUCE_PUMPS = 6

interface pageProps {
  params: {
    drinkId: string
  }
}
const page = async ({ params }: pageProps) => {
  // db fetching

  // just in case we couldn't connect with the database
  const drinkId = parseInt(params.drinkId, 10)
  const Drink = drinks.find((item) => item._id === drinkId)
  //logic handling


  return (
    <>
      <LayOut>
        <h1> {params.drinkId}</h1>
        <div>
          {Drink && (
            <div>
              <h1>{Drink.title}</h1>
              <h2>{Drink.price}</h2>
              <form>
                <div className="form-group">
                  <label>Size:</label>
                  <select
                    name="size"
                    //value={this.state.size}
                    //onChange={this.handleInputChange}
                    defaultValue="S"
                    className="form-control"
                  >
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    name="hasWhippingCream"
                    //checked={this.state.hasWhippingCream}
                    //onChange={this.handleInputChange}
                    className="form-check-input"
                  />
                  <label className="form-check-label">Whipping Cream</label>
                </div>
                <div className="form-group">
                  <label>Milk Option:</label>
                  <select
                    name="milkOption"
                    //value={this.state.milkOption}
                    //onChange={this.handleInputChange}
                    defaultValue="none"
                    className="form-control"
                  >
                    <option value="none">None</option>
                    <option value="whole_milk">Whole Milk</option>
                    <option value="almond_milk">Almond Milk</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Chocolate Sauce Pumps:</label>
                  <input
                    type="number"
                    name="chocolateSaucePumps"
                    //value={this.state.chocolateSaucePumps}
                    //onChange={this.handleInputChange}
                    className="form-control"
                  />
                </div>
              </form>
              <button>Add to Cart</button>
            </div>
          )}
        </div>
      </LayOut>
    </>
  )
}
export default page
