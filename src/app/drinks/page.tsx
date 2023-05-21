import LayOut from "../components/layout"
import ProductsGrid from "../components/productGrid"

// Sample product data
const products = [
  { _id: 1, title: "Hot Coffee", price: 10.99 },
  { _id: 2, title: "Hot Coffee", price: 19.99 },
  { _id: 3, title: "Cold Milktea", price: 14.49 },
  { _id: 2, title: "Blended Milk Tea", price: 19.99 },
  { _id: 2, title: "Product 2", price: 19.99 },
  { _id: 2, title: "Product 2", price: 19.99 },

  // Add more products here
]

export default function Drinks() {
  return (
    <>
      <LayOut>
        <ProductsGrid products={products}></ProductsGrid>
      </LayOut>
    </>
  )
}
