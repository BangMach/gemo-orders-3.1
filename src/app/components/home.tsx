"use client"

import { SessionProvider, useSession } from "next-auth/react"

import LayOut from "./layout"

export default function HomeComponent() {
  const { data: session } = useSession()
  return (
    <SessionProvider session={session}>
      <LayOut>
        <div className="text-blue-900 flex justify-between">
          <h2>
            Hello, <b>{session?.user?.name}</b>
          </h2>
          <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
            <span className="px-2">{session?.user?.name}</span>
          </div>
        </div>
      </LayOut>
    </SessionProvider>
  )
}
