'use client'
import { motion } from 'framer-motion'
import { FaUsersCog, FaShieldAlt, FaGraduationCap, FaIndustry, FaHandshake, FaCogs, FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
import SectionHeading from '@/components/site/SectionHeading'

const services = [
  { icon: FaUsersCog, title: 'HR Consultancy', desc: 'HR policies, performance management, talent strategies, employee engagement and end-to-end HR operations.', color: 'from-orange-500 to-amber-400' },
  { icon: FaHandshake, title: 'Industrial Relations & Compliance', desc: 'Labour law advisory, grievance handling, dispute resolution and union–management relations.', color: 'from-blue-500 to-cyan-500' },
  { icon: FaIndustry, title: 'Industrial Safety', desc: 'Safety audits, risk assessments, hazard mitigation, emergency preparedness and compliance advisory.', color: 'from-red-500 to-rose-400' },
  { icon: FaGraduationCap, title: 'Training Solutions', desc: 'Leadership development, workforce capability building, compliance training and customized modules.', color: 'from-green-500 to-teal-400' },
  { icon: FaHandshake, title: 'Corporate Social Responsibility', desc: 'CSR policy design, project monitoring, sustainability initiatives and stakeholder reporting.', color: 'from-purple-500 to-pink-500' },
  { icon: FaCogs, title: 'Operational Excellence', desc: 'TPM implementation, QMS/ISO 9001 support, Kaizen, Lean, Six Sigma and continuous improvement.', color: 'from-amber-500 to-orange-400' },
]

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeading eyebrow="What We Do" title="Comprehensive HR, Safety & Training Solutions" subtitle="From HR consulting and industrial safety to training and CSR — we cover the entire organizational development value chain." />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative rounded-2xl p-7 bg-white border border-slate-100 hover:border-transparent shadow-soft hover:shadow-glow transition-all overflow-hidden"
            >
              <div className={`absolute -right-12 -top-12 w-36 h-36 rounded-full bg-gradient-to-br ${s.color} opacity-10 group-hover:opacity-20 transition`}></div>
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} grid place-items-center text-white text-2xl shadow-glow`}>
                <s.icon />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              <Link href="/services" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-orange-600 group-hover:gap-3 transition-all">
                Learn more <FaArrowRight />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
