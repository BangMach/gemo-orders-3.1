import LayOut from "../components/layout"
import ProductBox from "../components/productBox"
import { StyledProductsGrid } from "../components/productGrid"

// Sample product data
const breakfasts = [
  {
    _id: 1,
    description: "breakfasts",
    title: "Bagel",
    price: 10.99,
    images:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantImages/6f8e4ec7-b20e-4a90-8968-8c12dca6931c.JPG",
  },
  {
    _id: 2,
    title: "Sandwich",
    description: "breakfasts",

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
        <StyledProductsGrid>
          {breakfasts?.length > 0 &&
            breakfasts.map((breakfast) => (
              <ProductBox key={breakfast._id} {...breakfast} />
            ))}
        </StyledProductsGrid>
      </LayOut>
    </>
  )
}
