"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Database, Server, BarChart3, LineChart, PieChart, Layers } from "lucide-react"

export default function DataEngineering() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Data Engineering</h1>
            <p className="text-gray-400 text-lg mb-8">
              Transform your data into actionable insights with our advanced data engineering solutions.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-md transition duration-300">
              Explore Solutions
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
            <p className="text-gray-400 uppercase tracking-wider mb-2">OUR EXPERTISE</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Data Engineering Services</h2>
            <p className="text-gray-400 text-lg max-w-3xl">
              We help organizations design, build, and maintain robust data infrastructure to drive insights and
              decision-making.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="h-8 w-8 text-purple-500" />,
                title: "Data Architecture",
                description: "Design scalable and efficient data architectures that support your business objectives.",
              },
              {
                icon: <Server className="h-8 w-8 text-purple-500" />,
                title: "Data Pipeline Development",
                description: "Build robust data pipelines for efficient data collection, processing, and storage.",
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-purple-500" />,
                title: "Data Warehousing",
                description:
                  "Implement modern data warehousing solutions for centralized data management and analysis.",
              },
              {
                icon: <Layers className="h-8 w-8 text-purple-500" />,
                title: "ETL/ELT Processes",
                description:
                  "Develop efficient ETL/ELT processes to transform raw data into valuable business insights.",
              },
              {
                icon: <LineChart className="h-8 w-8 text-purple-500" />,
                title: "Real-time Data Processing",
                description: "Enable real-time data processing and analytics for immediate insights and actions.",
              },
              {
                icon: <PieChart className="h-8 w-8 text-purple-500" />,
                title: "Data Governance",
                description: "Establish data governance frameworks to ensure data quality, security, and compliance.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/30 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 md:py-32 bg-[#080808]">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="text-purple-500 uppercase tracking-wider mb-2">CASE STUDY</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transforming Data Infrastructure for a Fortune 500 Company
              </h2>
              <p className="text-gray-400 text-lg mb-6">
                Learn how we helped a leading company modernize their data infrastructure, resulting in 40% faster data
                processing and a 25% reduction in operational costs.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md transition duration-300">
                Read Case Study
              </Button>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Data Engineering Case Study"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Data Infrastructure?</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate to build a robust data foundation that drives insights and powers your business
              decisions.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-md transition duration-300">
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
