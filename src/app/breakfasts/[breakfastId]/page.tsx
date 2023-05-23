import LayOut from "../../components/layout"

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
const FOOD_CUSTOMIZATIONS = {
  Sandwich: {
    Egg: 1,
    Turkey: 1,
  },
  Bagel: {
    Butter: 0.5,
    "Cream Cheese": 0.5,
  },
  showError: false,
  errorText: "",
}

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
              <label className="form-label">Additional Food:</label>
              <ul className="list-group">
                {Object.keys(FOOD_CUSTOMIZATIONS[Breakfast.title]).map(
                  (additionalFood) => (
                    <li key={additionalFood} className="list-group-item">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="additionalFoods"
                          value={additionalFood}
                          //checked={additionalFoods.includes(additionalFood)}
                          // onChange={this.handleInputChange}
                        />
                        <label className="form-check-label">
                          {additionalFood}
                        </label>
                      </div>
                    </li>
                  )
                )}
              </ul>
              <button>Add to Cart</button>
            </div>
          )}
        </div>
      </LayOut>
    </>
  )
}
export default page
