import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Apptware - AI-First, Design Always",
  description:
    "We blend AI innovation with human-centric design to craft intelligent, seamless, and future-ready digital experiences.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className } >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
