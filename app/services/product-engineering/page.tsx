"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function ProductEngineering() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-purple-900/20 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Product Engineering</h1>
            <p className="text-gray-400 text-lg mb-8">
              Build innovative, scalable, and market-ready products with our end-to-end product engineering services.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-md transition duration-300">
              Learn More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-400 uppercase tracking-wider mb-2">OUR SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Product Engineering Solutions</h2>
            <p className="text-gray-400 text-lg max-w-3xl">
              From concept to deployment, we provide end-to-end product engineering services to help you build
              innovative and market-ready products.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Full-Stack & API Development",
                description:
                  "Build robust, scalable, and high-performance applications with our comprehensive full-stack and API development services.",
                link: "/services/product-engineering/full-stack-api-development",
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "Mobile App Development",
                description:
                  "Create engaging, user-friendly mobile applications for iOS and Android platforms that deliver exceptional user experiences.",
                link: "/services/product-engineering/mobile-app-development",
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "UI/UX Design",
                description:
                  "Design intuitive, visually appealing interfaces that enhance user engagement and satisfaction.",
                link: "/services/product-engineering/ui-ux-design",
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "DevOps & Cloud Services",
                description: "Streamline your development and deployment processes with our DevOps and cloud services.",
                link: "/services/product-engineering/devops-cloud",
                image: "/placeholder.svg?height=300&width=500",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/30 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <Link
                    href={service.link}
                    className="text-purple-500 flex items-center gap-2 hover:text-purple-400 group"
                  >
                    Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-[#080808]">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-400 uppercase tracking-wider mb-2">WHY CHOOSE US</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Approach to Product Engineering</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              We combine technical expertise, design thinking, and business acumen to deliver products that drive growth
              and innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "User-Centric Design",
                description:
                  "We place users at the center of our design process to create products that are intuitive, engaging, and meet real user needs.",
              },
              {
                title: "Agile Development",
                description:
                  "Our agile approach ensures flexibility, transparency, and continuous improvement throughout the development process.",
              },
              {
                title: "Technical Excellence",
                description:
                  "We maintain high standards of code quality, performance, and security to deliver robust and reliable products.",
              },
              {
                title: "Scalable Architecture",
                description:
                  "Our solutions are designed to scale with your business, accommodating growth and evolving requirements.",
              },
              {
                title: "Continuous Innovation",
                description:
                  "We stay at the forefront of technology trends to bring innovative solutions to your product challenges.",
              },
              {
                title: "End-to-End Support",
                description:
                  "From concept to deployment and beyond, we provide comprehensive support throughout your product's lifecycle.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/30 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-purple-900/20 to-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Next Product?</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate to create innovative, market-ready products that drive your business forward.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-md transition duration-300">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
