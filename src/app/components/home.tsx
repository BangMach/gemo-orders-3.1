"use client"

import { SessionProvider, useSession } from "next-auth/react"

import LayOut from "./layout"

export default function HomeComponent() {
  const { data: session } = useSession()
  return (
      <LayOut>
      </LayOut>
  )
}
