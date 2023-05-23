"use client"

import { useEffect, useState } from "react"

import { IDrink } from "../models/Drinks"
import LayOut from "../components/layout"
import ProductsGrid from "../components/productGrid"
import axios from "axios"

// Sample product data
const products = [
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

export default function DrinksPage() {
  const [drinks, setDrinks] = useState<IDrink[]>([])
  useEffect(() => {
    axios.get("../api/drinks").then((response) => {
      setDrinks(response.data)
    })
  }, [])
  return (
    <>
      <LayOut>
        <ProductsGrid products={products}></ProductsGrid>
      </LayOut>
    </>
  )
}
