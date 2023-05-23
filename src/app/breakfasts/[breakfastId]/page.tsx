import { FC } from "react"
import LayOut from "../../components/layout"
import ProductBox from "../../components/productBox"
import { StyledProductsGrid } from "../../components/productGrid"

// Sample product data
const breakfasts = [
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

interface pageProps {
  params: {
    breakfastId: string
  }
}
const page = async ({ params }: pageProps) => {
  // db fetching

  // just in case we couldn't connect with the database
  const breakfastId = parseInt(params.breakfastId, 10)
  const Breakfast = breakfasts.find((item) => item._id === breakfastId)

  //logic handling

  console.log(params)
  return (
    <>
      <LayOut>
        <h1> {params.breakfastId}</h1>
        <div>
          {Breakfast && (
            <div>
              <h1>{Breakfast.title}</h1>
              <h2>{Breakfast.price}</h2>
              <button>Add to Cart</button>
            </div>
          )}
        </div>
      </LayOut>
    </>
  )
}
export default page
