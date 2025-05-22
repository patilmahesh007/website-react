import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-gray-800">
      <div className="container mx-auto px-4 py-12 w-[85vw]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image src="/FooterLogo.png" alt="Apptware Logo" width={150} height={40} className="h-8 w-auto" />
            </Link>
            <p className="text-gray-400 mb-6">
              We blend AI innovation with human-centric design to craft intelligent, seamless, and future-ready digital
              experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {/* Removed Data Engineering */}
              <li>
                <Link href="/services/ai" className="text-gray-400 hover:text-white">
                  AI & Gen AI
                </Link>
              </li>
              <li>
                <Link href="/services/product-engineering" className="text-gray-400 hover:text-white">
                  Product Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/services/product-engineering/full-stack-api-development"
                  className="text-gray-400 hover:text-white"
                >
                  Full-Stack & API Development
                </Link>
              </li>
              <li>
                <Link href="/services/hosting" className="text-gray-400 hover:text-white">
                  Hosting Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
              {/* Removed Blogs and Case Studies */}
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
           <ul className="space-y-4">
  <li className="flex items-start space-x-3">
    <Mail className="h-5 w-5 text-purple-500 mt-0.5" />
    <a href="mailto:shrishtiwebsolutios@gmail.com" className="text-gray-400 hover:text-white">
      shrishtiwebsolutios@gmail.com
    </a>
  </li>
  <li className="flex items-start space-x-3">
    <Phone className="h-5 w-5 text-purple-500 mt-0.5" />
    <a href="tel:8468954007" className="text-gray-400 hover:text-white">
      8468954007
    </a>
  </li>
  <li className="flex items-start space-x-3">
    <MapPin className="h-5 w-5 text-purple-500 mt-0.5" />
    <Link
      href="https://www.google.com/maps/place/Shrishti+web+solutions/@19.5231448,74.4749746,751m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bdcf19e3fb5ed0b:0x2789bd505eb292c6!8m2!3d19.5231448!4d74.4775495!16s%2Fg%2F11xf_7fybk?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoASAFQAw%3D%3D"
      className="text-gray-400 hover:text-white"
      target="_blank"
      rel="noopener noreferrer"
    >
      Satral songaon Tal-Rahuri 
    </Link>
  </li>
</ul>

          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Apptware. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-500 hover:text-white text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
