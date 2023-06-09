import LayOut from "./components/layout"
import dynamic from "next/dynamic"

const DynamicHomeComponent = dynamic(() => import("./components/home"), {
  ssr: false,
})

export default function Home() {
  return (
    <div className="bg-blue-900 w-screen h-screen flex items-center ">
      <div className="text-center w-fu">
        <button className="bg-red p-2 px-4 rounded-md">
          Login with Google
        </button>
      </div>
    </div>
  )
}
