"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function About() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Apptware</h1>
            <p className="text-gray-400 text-lg mb-8">
              We're a team of innovators, designers, and engineers passionate about creating intelligent digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-32">
        <div className="mx-auto px-4" style={{ maxWidth: "85vw" }}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-purple-500 uppercase tracking-wider mb-2">OUR STORY</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pioneering the Future of Digital Experiences</h2>
              <p className="text-gray-400 text-lg mb-6">
                Founded in 2015, Apptware began with a simple mission: to blend AI innovation with human-centric design to create intelligent, seamless digital experiences.
              </p>
              <p className="text-gray-400 text-lg mb-6">
                Over the years, we've grown from a small team of passionate technologists to a global company serving clients across industries. Throughout our journey, we've remained committed to our core values of innovation, excellence, and client success.
              </p>
              <p className="text-gray-400 text-lg">
                Today, we're at the forefront of the AI revolution, helping organizations leverage cutting-edge technologies to solve complex problems and create new opportunities.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-80 rounded-lg overflow-hidden"
            >
              <Image src="/placeholder.svg?height=400&width=600" alt="Apptware team" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-32 bg-[#080808]">
        <div className="mx-auto px-4" style={{ maxWidth: "85vw" }}>
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-400 uppercase tracking-wider mb-2">OUR VALUES</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Drives Us</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our values shape everything we do, from how we work with clients to how we develop our solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "We constantly push the boundaries of what's possible, exploring new technologies and approaches to create breakthrough solutions.",
              },
              {
                title: "Excellence",
                description:
                  "We hold ourselves to the highest standards in everything we do, from code quality to client communication.",
              },
              {
                title: "Collaboration",
                description:
                  "We believe the best solutions come from working together—with our clients, our partners, and each other.",
              },
              {
                title: "Integrity",
                description: "We act with honesty, transparency, and ethical responsibility in all our interactions.",
              },
              {
                title: "Impact",
                description:
                  "We measure our success by the positive impact we create for our clients, their users, and society.",
              },
              {
                title: "Growth",
                description:
                  "We're committed to continuous learning and development, both as individuals and as an organization.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/30 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 md:py-32">
        <div className="mx-auto px-4" style={{ maxWidth: "85vw" }}>
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-400 uppercase tracking-wider mb-2">OUR TEAM</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Leadership</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in technology, design, and business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                className="bg-gray-900/30 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item * 0.1 }}
              >
                <div className="relative h-64">
                  <Image
                    src={`/placeholder.svg?height=300&width=300`}
                    alt={`Team member ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">John Doe</h3>
                  <p className="text-purple-500 mb-4">Chief Executive Officer</p>
                  <p className="text-gray-400">
                    With over 15 years of experience in technology and business leadership, John leads our company's vision and strategy.
                  </p>
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
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-gray-400 text-lg mb-8">
              We're always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-md transition duration-300">
              View Open Positions
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
