"use client"

import { SessionProvider, useSession } from "next-auth/react"

import { AuthRequiredError } from "../lib/exception"
import LayOut from "./layout"
import { ReactNode } from "react"

interface IProps {
  children: ReactNode
  session: any
}

export default function HomeComponent({ children, session }: IProps) {
  if (!session) throw new AuthRequiredError()

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
