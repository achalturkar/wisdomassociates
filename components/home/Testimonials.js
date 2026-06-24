'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import SectionHeading from '@/components/site/SectionHeading'

const testimonials = [
  { name: 'Rajesh Sharma', designation: 'General Manager – HR, Akar Industries', quote: 'Wisdom Associates transformed our HR function. Their training programs on supervisory development boosted our team\'s efficiency significantly. Highly professional and result-oriented.' },
  { name: 'Priya Deshmukh', designation: 'Plant Head, Savita Auto Industries', quote: 'The industrial safety audit conducted by Wisdom Associates was thorough and actionable. We achieved ISO 45001 compliance within 6 months of their engagement.' },
  { name: 'Sunil Wankhede', designation: 'Director, Orange City Alloys', quote: 'Their labour law compliance advisory saved us from major legal exposure. The team is knowledgeable, responsive and genuinely invested in our success.' },
  { name: 'Kavita Bhatt', designation: 'HR Manager, Technocrates India Pvt Ltd', quote: 'The POSH and compliance training was extremely well-received by our employees. Practical, engaging, and fully customized to our industry context.' },
  { name: 'Amit Kohli', designation: 'VP Operations, Jhonson Lifts Pvt Ltd', quote: 'We\'ve been working with Wisdom Associates for 4 years now. Their HR outsourcing services are seamless — it\'s like having an in-house HR team without the overhead.' },
  { name: 'Seema Raut', designation: 'CEO, TeQworth Solutions', quote: 'Dr. Suresh Pandilwar\'s team is exceptional. From leadership training to CSR compliance, they handle everything with expertise and dedication.' },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-orange-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeading eyebrow="Client Stories" title="What our clients say" subtitle="Real feedback from organizations that trust Wisdom Associates." />

        {/* Desktop: 3 cards with middle elevated */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mt-14 items-start">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-white rounded-2xl p-7 border border-slate-100 shadow-soft hover:shadow-glow hover:-translate-y-2 transition-all ${i === 1 ? '-translate-y-6 border-orange-200 shadow-glow' : ''}`}
            >
              <FaQuoteLeft className="text-orange-300 text-3xl mb-4" />
              <p className="text-slate-600 leading-relaxed text-sm italic">"{t.quote}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-amber-300 grid place-items-center text-white font-bold text-sm">{t.name.charAt(0)}</div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.designation}</div>
                </div>
              </div>
              <div className="flex gap-1 mt-3">
                {[...Array(5)].map((_, j) => <FaStar key={j} className="text-amber-400 text-xs" />)}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Second row desktop */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mt-6 items-start">
          {testimonials.slice(3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-white rounded-2xl p-7 border border-slate-100 shadow-soft hover:shadow-glow hover:-translate-y-2 transition-all ${i === 1 ? '-translate-y-6 border-orange-200 shadow-glow' : ''}`}
            >
              <FaQuoteLeft className="text-orange-300 text-3xl mb-4" />
              <p className="text-slate-600 leading-relaxed text-sm italic">"{t.quote}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-teal-300 grid place-items-center text-white font-bold text-sm">{t.name.charAt(0)}</div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.designation}</div>
                </div>
              </div>
              <div className="flex gap-1 mt-3">
                {[...Array(5)].map((_, j) => <FaStar key={j} className="text-amber-400 text-xs" />)}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: auto-scroll */}
        <div className="lg:hidden mt-10 overflow-hidden">
          <div className="flex gap-5 animate-marquee" style={{ width: 'max-content' }}>
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="w-80 bg-white rounded-2xl p-6 border border-slate-100 shadow-soft shrink-0">
                <FaQuoteLeft className="text-orange-300 text-2xl mb-3" />
                <p className="text-slate-600 leading-relaxed text-sm italic">"{t.quote}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-amber-300 grid place-items-center text-white font-bold text-xs">{t.name.charAt(0)}</div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.designation}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
