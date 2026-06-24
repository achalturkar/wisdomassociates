'use client'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaAward, FaHandshake, FaClock, FaUsers, FaShieldAlt } from 'react-icons/fa'
import SectionHeading from '@/components/site/SectionHeading'

const reasons = [
  { icon: FaAward, title: '12+ Years of Expertise', desc: 'Over a decade of deep domain knowledge in HR, safety and training across Maharashtra.' },
  { icon: FaHandshake, title: 'Customized Solutions', desc: 'Every engagement is tailored to your industry, size and organizational culture.' },
  { icon: FaClock, title: 'Result-Oriented Approach', desc: 'Measurable outcomes and accountable delivery — we focus on what moves the needle.' },
  { icon: FaUsers, title: 'Experienced Team', desc: 'Doctorates, certified safety professionals and seasoned HR consultants on one platform.' },
  { icon: FaShieldAlt, title: 'Compliance Assurance', desc: 'Comprehensive legal compliance across labour laws, safety regulations and CSR mandates.' },
  { icon: FaCheckCircle, title: 'Pan-India Training Network', desc: 'Delivered programs at organizations like Mahindra, TATA, Vedanta, Power Grid across India.' },
]

export default function WhyChoose() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeading eyebrow="Why Wisdom Associates" title="The difference that experience makes" subtitle="We bring passion, precision and proven methodologies to every client engagement." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }} className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-amber-300 grid place-items-center text-white text-xl shrink-0">
                <r.icon />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">{r.title}</h3>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
