"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
}

export default function AnimatedCounter({ value, duration = 2000, prefix = "", suffix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = value

    // Make sure duration is not zero
    const totalDuration = Math.max(duration, 1)

    // Calculate the time for each increment
    const incrementTime = totalDuration / end

    // Timer reference
    let timer: NodeJS.Timeout

    // Don't run if end is zero
    if (end === 0) {
      setCount(0)
      return
    }

    const counter = () => {
      start += 1
      setCount(start)

      if (start === end) {
        clearInterval(timer)
      }
    }

    // Set up the timer
    timer = setInterval(counter, incrementTime)

    // Clear the timer when the component unmounts
    return () => clearInterval(timer)
  }, [value, duration, isInView])

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
