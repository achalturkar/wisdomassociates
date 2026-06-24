'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { value: 50, suffix: '+', label: 'Companies Served' },
  { value: 500, suffix: '+', label: 'Training Programs' },
  { value: 12, suffix: '+', label: 'Years of Excellence' },
  { value: 35, suffix: '+', label: 'Training Topics' },
]

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        const dur = 1800
        const step = target / (dur / 16)
        let cur = 0
        const timer = setInterval(() => {
          cur = Math.min(cur + step, target)
          setCount(Math.floor(cur))
          if (cur >= target) clearInterval(timer)
        }, 16)
      }
    })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-amber-400">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center text-white">
            <div className="text-4xl md:text-5xl font-extrabold"><Counter target={s.value} suffix={s.suffix} /></div>
            <div className="mt-2 text-sm font-semibold text-white/80 uppercase tracking-wider">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
