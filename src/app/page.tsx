import LayOut from "./components/layout"
import { UserProvider } from "@auth0/nextjs-auth0/client"
import dynamic from "next/dynamic"

export default function Home() {
  return (
    <UserProvider>
      <div className="bg-blue-900 w-screen h-screen flex items-center ">
        <div className="text-center w-fu">
          <button className="bg-red p-2 px-4 rounded-md">
            Login with Google
          </button>
        </div>
      </div>
    </UserProvider>
  )
}
