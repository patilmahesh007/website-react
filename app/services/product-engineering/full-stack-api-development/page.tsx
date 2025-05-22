"use client"
import { ArrowRight, Code, Database, Server, Globe, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export default function FullStackApiDevelopment() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      
      {/* Full Width - Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-purple-900/20 to-black w-full">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Full-Stack & API Development</h1>
            <p className="text-gray-400 text-lg mb-8">
              Build robust, scalable, and high-performance applications with our comprehensive full-stack and API development services.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-md transition duration-300">
              Get Started
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Sections with 85vw width */}
      <div className="mx-auto w-[85vw]">
        {/* Services Overview */}
        <section className="py-20 md:py-32">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-400 uppercase tracking-wider mb-2">OUR EXPERTISE</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Full-Stack Development Services</h2>
            <p className="text-gray-400 text-lg max-w-3xl">
              From front-end interfaces to back-end systems, we deliver end-to-end solutions that power your digital transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8 text-purple-500" />,
                title: "Front-End Development",
                description: "Create responsive, intuitive user interfaces using modern frameworks like React, Angular, and Vue.js.",
              },
              {
                icon: <Server className="h-8 w-8 text-purple-500" />,
                title: "Back-End Development",
                description: "Build robust server-side applications with Node.js, Python, Java, and other leading technologies.",
              },
              {
                icon: <Database className="h-8 w-8 text-purple-500" />,
                title: "Database Design",
                description: "Design and implement efficient database structures using SQL and NoSQL solutions.",
              },
              {
                icon: <Globe className="h-8 w-8 text-purple-500" />,
                title: "API Development",
                description: "Create secure, scalable, and well-documented APIs that connect your systems and services.",
              },
              {
                icon: <Cloud className="h-8 w-8 text-purple-500" />,
                title: "Hosting Services",
                description: "Deploy and manage your applications with our reliable and secure hosting solutions.",
              },
              {
                icon: <ArrowRight className="h-8 w-8 text-purple-500" />,
                title: "Continuous Integration",
                description: "Implement CI/CD pipelines for automated testing and deployment of your applications.",
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
        </section>

        {/* Technology Stack */}
        <section className="py-20 md:py-32 bg-[#080808]">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-400 uppercase tracking-wider mb-2">TECHNOLOGY STACK</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Powered by Modern Technologies</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              We leverage the latest technologies and frameworks to build scalable, maintainable, and high-performance applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "React", "Angular", "Vue.js", "Node.js", "Python", "Java", "MongoDB", "PostgreSQL",
              "AWS", "Azure", "Docker", "Kubernetes",
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/30 p-6 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <p className="text-lg font-medium">{tech}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="py-20 md:py-32">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-400 uppercase tracking-wider mb-2">OUR PROCESS</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Work</h2>
            <p className="text-gray-400 text-lg max-w-3xl">
              Our structured approach ensures efficient delivery of high-quality solutions that meet your business needs.
            </p>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                number: "01",
                title: "Discovery & Planning",
                description: "We start by understanding your business requirements, target audience, and project goals to create a comprehensive roadmap.",
              },
              {
                number: "02",
                title: "Design & Architecture",
                description: "Our team designs the system architecture and user interfaces, focusing on scalability, performance, and user experience.",
              },
              {
                number: "03",
                title: "Development & Testing",
                description: "We follow agile methodologies to develop and test your application, ensuring high quality and regular feedback.",
              },
              {
                number: "04",
                title: "Deployment & Maintenance",
                description: "We deploy your application to production and provide ongoing maintenance and support to ensure optimal performance.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Full Width - CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-purple-900/20 to-black w-full">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Next Digital Solution?</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate to create a powerful, scalable application that drives your business forward.
            </p>
            <Link href="/contact">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-md transition duration-300">
                Contact Our Team
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
