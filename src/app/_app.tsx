import "@/styles/globals.css"

import LayOut from "./components/layout"
import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return <LayOut>Test</LayOut>
}
