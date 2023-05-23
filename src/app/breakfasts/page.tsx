import LayOut from "../components/layout"
import ProductsGrid from "../components/productGrid"

// Sample product data
const products = [
  {
    _id: 1,
    title: "Bagel",
    price: 10.99,
    images:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantImages/6f8e4ec7-b20e-4a90-8968-8c12dca6931c.JPG",
  },
  {
    _id: 2,
    title: "Sandwich",
    price: 19.99,
    images:
      "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/jmn6ueqdjc8nqzn3ompn",
  },
  // Add more products here
]

export default function Breakfast() {
  return (
    <>
      <LayOut>
        <ProductsGrid products={products}></ProductsGrid>
      </LayOut>
    </>
  )
}
