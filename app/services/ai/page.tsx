"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Brain, Cpu, Bot, Sparkles, Zap, Shield } from "lucide-react"

export default function AiServices() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">AI & Gen AI Solutions</h1>
            <p className="text-gray-400 text-lg mb-8">
              Leverage the power of artificial intelligence to drive innovation and efficiency in your business.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-md transition duration-300">
              Discover AI Solutions
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-32">
        <div className="mx-auto px-4" style={{ width: "85vw" }}>
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-400 uppercase tracking-wider mb-2">OUR AI SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transformative AI Solutions</h2>
            <p className="text-gray-400 text-lg max-w-3xl">
              We develop cutting-edge AI solutions that help businesses automate processes, gain insights, and create
              new opportunities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-8 w-8 text-purple-500" />,
                title: "Machine Learning",
                description:
                  "Develop predictive models and algorithms that learn from data to improve decision-making and automate processes.",
              },
              {
                icon: <Bot className="h-8 w-8 text-purple-500" />,
                title: "Generative AI",
                description:
                  "Create content, designs, and solutions using state-of-the-art generative AI models and techniques.",
              },
              {
                icon: <Cpu className="h-8 w-8 text-purple-500" />,
                title: "Computer Vision",
                description:
                  "Implement image and video analysis solutions for object detection, recognition, and classification.",
              },
              {
                icon: <Zap className="h-8 w-8 text-purple-500" />,
                title: "Natural Language Processing",
                description:
                  "Build applications that understand, interpret, and generate human language for chatbots, sentiment analysis, and more.",
              },
              {
                icon: <Sparkles className="h-8 w-8 text-purple-500" />,
                title: "AI Strategy Consulting",
                description:
                  "Develop comprehensive AI strategies aligned with your business goals and industry challenges.",
              },
              {
                icon: <Shield className="h-8 w-8 text-purple-500" />,
                title: "Responsible AI",
                description:
                  "Implement ethical AI practices and governance frameworks to ensure responsible use of AI technologies.",
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

      {/* AI Innovation Showcase */}
      <section className="py-20 md:py-32 bg-[#080808]">
        <div className="mx-auto px-4" style={{ width: "85vw" }}>
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-400 uppercase tracking-wider mb-2">INNOVATION SHOWCASE</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">AI in Action</h2>
            <p className="text-gray-400 text-lg max-w-3xl">
              Explore how our AI solutions are transforming industries and creating new possibilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Intelligent Customer Service",
                description:
                  "AI-powered chatbots and virtual assistants that provide 24/7 customer support, reducing response times by 80%.",
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "Predictive Maintenance",
                description:
                  "Machine learning models that predict equipment failures before they occur, reducing downtime by 45%.",
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "Content Generation",
                description:
                  "Generative AI tools that create high-quality content for marketing, product descriptions, and more.",
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "Visual Quality Control",
                description:
                  "Computer vision systems that detect defects and ensure product quality with 99.8% accuracy.",
                image: "/placeholder.svg?height=300&width=500",
              },
            ].map((showcase, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/30 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <Image
                    src={showcase.image || "/placeholder.svg"}
                    alt={showcase.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{showcase.title}</h3>
                  <p className="text-gray-400 mb-4">{showcase.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Harness the Power of AI?</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate to develop AI solutions that drive innovation, efficiency, and growth for your business.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-md transition duration-300">
              Start Your AI Journey
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
