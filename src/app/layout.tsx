import "./globals.css"

import Footer from "./components/footer"
import Header from "./components/header"
import { Inter } from "next/font/google"
import Provider from "./components/provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.className} h-full scroll-smooth antialiased`}
    >
      <body className="flex h-full flex-col">
        <Provider>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
