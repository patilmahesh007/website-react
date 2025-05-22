"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import AnimatedCounter from "@/components/animated-counter"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex justify-center">
      <div className="w-full max-w-[85vw]">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                AI-First, Design <br /> Always.
              </h1>
              <p className="text-gray-400 text-lg mb-8 max-w-lg">
                We blend AI innovation with human-centric design to craft intelligent, seamless, and future-ready digital
                experiences.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-md transition duration-300">
                Know More
              </Button>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h2 className="text-4xl font-bold text-white mb-2">
                  <AnimatedCounter value={75} suffix="%" />
                </h2>
                <p className="text-gray-300">Higher User Engagement</p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h2 className="text-4xl font-bold text-white mb-2">
                  <AnimatedCounter value={100} suffix="+" />
                </h2>
                <p className="text-gray-300">Successful Projects</p>
              </div>

              <div className="bg-purple-900/30 p-6 rounded-lg col-span-1 md:col-span-2">
                <h3 className="font-medium mb-1">
                  Design <span className="font-bold">Hive</span> 202<span className="text-purple-400">3</span>
                </h3>
                <p className="text-sm text-gray-300">
                  A vibrant meetup for designers, thinkers, and innovators to exchange ideas and push design boundaries.
                </p>
                <p className="text-xs text-purple-400 mt-2">Coming Soon</p>
              </div>

              <div className="col-span-1 md:col-span-2 relative h-64 rounded-lg overflow-hidden">
                <Image src="/team-image.jpg" alt="Team working" fill className="object-cover" />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-teal-500 rounded-full p-3">
                    <Image src="/logo-icon.svg" alt="Apptware icon" width={24} height={24} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 md:py-32 bg-[#080808]">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-400 uppercase tracking-wider mb-2">SERVICES</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">Big Goals? Tough Challenges?</h2>
              <p className="text-3xl">
                <span className="text-purple-500">We've Got You</span>
                <span className="text-teal-400"> Covered.</span>
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <ServiceCard
                icon="/data-icon.svg"
                title="Data Engineering"
                description="Transform your data into actionable insights with our advanced data engineering solutions."
                link="/services/data-engineering"
                delay={0.1}
              />

              <ServiceCard
                icon="/ai-icon.svg"
                title="Gen AI, AI"
                description="Leverage the power of artificial intelligence to drive innovation and efficiency in your business."
                link="/services/ai"
                delay={0.2}
              />

              <ServiceCard
                icon="/product-icon.svg"
                title="Product Engineering"
                description="Build robust, scalable products with our end-to-end product engineering services."
                link="/services/product-engineering"
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-400 uppercase tracking-wider mb-2">FEATURED PROJECTS</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Work Speaks For Itself</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  className="bg-gray-900/30 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: item * 0.1 }}
                >
                  <div className="relative h-48">
                    <Image
                      src={`/placeholder.svg?height=300&width=500`}
                      alt="Project thumbnail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Project Title {item}</h3>
                    <p className="text-gray-400 mb-4">A brief description of the project and the technologies used.</p>
                    <Link href="/case-studies" className="text-purple-500 flex items-center gap-2 hover:text-purple-400">
                      View Case Study <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Digital Experience?</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Let's collaborate to create intelligent, seamless, and future-ready digital solutions that drive results.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-md transition duration-300">
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
