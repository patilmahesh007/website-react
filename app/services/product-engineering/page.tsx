"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function DigitalTransformation() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-purple-900/20 to-black">
        <div className="w-[85vw] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Digital Transformation</h1>
            <p className="text-gray-400 text-lg mb-8">
              Transform your business operations with modern technologies to drive innovation and efficiency.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-md transition duration-300">
              Learn More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-32">
        <div className="w-[85vw] mx-auto px-4">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-400 uppercase tracking-wider mb-2">OUR SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Empowering Your Digital Journey</h2>
            <p className="text-gray-400 text-lg max-w-3xl">
              We offer a range of services designed to help your business embrace digital transformation and thrive in the modern era.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Cloud Migration",
                description:
                  "Seamlessly migrate your applications and infrastructure to the cloud for improved scalability and cost-efficiency.",
                link: "/services/digital-transformation/cloud-migration",
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "Legacy Modernization",
                description:
                  "Upgrade your outdated systems to modern architectures without disrupting core operations.",
                link: "/services/digital-transformation/legacy-modernization",
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "AI & Automation",
                description:
                  "Integrate AI and automation into your processes to enhance productivity and decision-making.",
                link: "/services/digital-transformation/ai-automation",
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "Data Analytics",
                description:
                  "Unlock valuable insights from your data with powerful analytics and visualization solutions.",
                link: "/services/digital-transformation/data-analytics",
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
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
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
        <div className="w-[85vw] mx-auto px-4">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-400 uppercase tracking-wider mb-2">WHY CHOOSE US</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforming Ideas into Digital Success</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our experts help you embrace cutting-edge technologies that align with your business vision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Business-Focused Strategy",
                description:
                  "We tailor solutions to your business goals, ensuring every transformation effort delivers measurable value.",
              },
              {
                title: "Technology Agility",
                description:
                  "Stay ahead with modern technologies and agile implementation strategies.",
              },
              {
                title: "Proven Expertise",
                description:
                  "Our cross-functional teams bring experience across industries and technologies.",
              },
              {
                title: "Custom Solutions",
                description:
                  "No one-size-fits-all here—we design digital strategies that work for you.",
              },
              {
                title: "Secure & Compliant",
                description:
                  "We ensure data privacy, security, and compliance with industry regulations.",
              },
              {
                title: "Ongoing Optimization",
                description:
                  "We continuously monitor and improve systems for performance and ROI.",
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
        <div className="w-[85vw] mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Digital Transformation Today</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate to unlock the full potential of your business through digital innovation.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-md transition duration-300">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
