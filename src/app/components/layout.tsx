"use client"

import Nav from "../components/nav"

export default function LayOut({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-blue-900 min-h-screen flex">
      <Nav />
      <div className="bg-white flex-grow mt-1 mr-1 mb-9 rounded-lg p-4">
        {children}
      </div>
    </div>
  )
}
