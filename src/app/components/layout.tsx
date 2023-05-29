"use client"

import { signIn, useSession } from "next-auth/react"

import Header from "./header"
import Nav from "../components/nav"
import { useState } from "react"

export default function LayOut({ children }: { children: React.ReactNode }) {
  const [showNav, setShowNav] = useState(false)
  // const { data: session } = useSession()
  // if (!session) {
  //   return (
  //     <div className="bg-bgGray w-screen h-screen flex items-center">
  //       <div className="text-center w-full">
  //         <button
  //           onClick={() => signIn("google")}
  //           className="bg-white p-2 px-4 rounded-lg"
  //         >
  //           Login with Google
  //         </button>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div className="bg-blue-900 min-h-screen flex">
      <Nav />
      <div className="bg-white flex-grow mt-1 mr-1 mb-9 rounded-lg p-4">
        {children}
      </div>
    </div>
  )
}
