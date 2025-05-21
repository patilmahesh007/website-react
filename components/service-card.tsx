"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  link: string
  delay?: number
}

export default function ServiceCard({ icon, title, description, link, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      className="border-t border-gray-800 pt-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="bg-gray-900/50 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
        <Image src={icon || "/placeholder.svg"} alt={title} width={32} height={32} />
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <Link href={link} className="text-purple-500 flex items-center gap-2 hover:text-purple-400 group">
        Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  )
}
