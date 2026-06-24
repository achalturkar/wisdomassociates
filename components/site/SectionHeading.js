'use client'
import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && (
        <span className="inline-block px-3 py-1 rounded-full bg-white border border-green-500 text-orange-500 text-xs font-bold uppercase tracking-wider">{eyebrow}</span>
      )}
      <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">{title}</h2>
      {subtitle && <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">{subtitle}</p>}
    </motion.div>
  )
}
