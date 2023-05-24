import LayOut from "./components/layout"
import dynamic from "next/dynamic"

const DynamicHomeComponent = dynamic(() => import("./components/home"), {
  ssr: false,
})

export default function Home() {
  return <LayOut>Dashboard</LayOut>
}
