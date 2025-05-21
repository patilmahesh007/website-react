"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const servicesDropdown = [
  { name: "Data Engineering", href: "/services/data-engineering" },
  { name: "AI & Gen AI", href: "/services/ai" },
  { name: "Product Engineering", href: "/services/product-engineering" },
  { name: "Full-Stack & API Development", href: "/services/product-engineering/full-stack-api-development" },
]

const industriesDropdown = [
  { name: "Healthcare", href: "/industries/healthcare" },
  { name: "Finance", href: "/industries/finance" },
  { name: "Retail", href: "/industries/retail" },
  { name: "Technology", href: "/industries/technology" },
]

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b border-gray-800 sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Apptware Logo" width={150} height={40} className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button
              className="flex items-center space-x-1 text-white hover:text-gray-300"
              onClick={() => {
                setServicesOpen(!servicesOpen)
                setIndustriesOpen(false)
              }}
            >
              <span>Services</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-64 bg-gray-900 border border-gray-800 rounded-md shadow-lg py-2 z-50"
                >
                  {servicesDropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                      onClick={() => setServicesOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative group">
            <button
              className="flex items-center space-x-1 text-white hover:text-gray-300"
              onClick={() => {
                setIndustriesOpen(!industriesOpen)
                setServicesOpen(false)
              }}
            >
              <span>Industries</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${industriesOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {industriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-64 bg-gray-900 border border-gray-800 rounded-md shadow-lg py-2 z-50"
                >
                  {industriesDropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                      onClick={() => setIndustriesOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/about" className="text-white hover:text-gray-300">
            About Us
          </Link>

          <Link href="/careers" className="text-white hover:text-gray-300">
            Careers
          </Link>

          <Link href="/blogs" className="text-white hover:text-gray-300">
            Blogs
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/contact" className="hidden md:block text-purple-500 hover:text-purple-400">
            Contact us
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900"
          >
            <div className="px-4 py-2 space-y-1">
              <div className="py-2">
                <button
                  className="flex items-center justify-between w-full text-white py-2"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 space-y-1 mt-1"
                    >
                      {servicesDropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block py-2 text-sm text-gray-300 hover:text-white"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="py-2">
                <button
                  className="flex items-center justify-between w-full text-white py-2"
                  onClick={() => setIndustriesOpen(!industriesOpen)}
                >
                  <span>Industries</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${industriesOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {industriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 space-y-1 mt-1"
                    >
                      {industriesDropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block py-2 text-sm text-gray-300 hover:text-white"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/about"
                className="block text-white hover:text-gray-300 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>

              <Link
                href="/careers"
                className="block text-white hover:text-gray-300 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Careers
              </Link>

              <Link
                href="/blogs"
                className="block text-white hover:text-gray-300 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blogs
              </Link>

              <Link
                href="/contact"
                className="block text-purple-500 hover:text-purple-400 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
