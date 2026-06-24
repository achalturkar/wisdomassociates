'use client'
import { motion } from 'framer-motion'
import { FaUsersCog, FaHandshake, FaIndustry, FaShieldAlt, FaGraduationCap, FaCogs, FaCheckCircle } from 'react-icons/fa'
import SectionHeading from '@/components/site/SectionHeading'
import CTA from '@/components/home/CTA'

const services = [
  {
    icon: FaUsersCog, title: 'Human Resource Consultancy', tag: 'Core Service', color: 'from-orange-500 to-amber-400',
    desc: 'Comprehensive HR consulting to align people strategies with organizational goals.',
    bullets: ['HR Policies & Procedures Design', 'Performance Management Systems', 'Talent Acquisition & Retention Strategies', 'Employee Engagement Programs', 'HR Audit & Advisory'],
  },
  {
    icon: FaHandshake, title: 'Industrial Relations & Compliance', tag: 'Labour Law', color: 'from-blue-500 to-cyan-400',
    desc: 'Expert IR advisory ensuring legal compliance and harmonious workplace relations.',
    bullets: ['Labour Law Advisory & Compliance', 'Grievance Handling Mechanisms', 'Dispute Resolution & Conciliation', 'Union–Management Relations', 'Standing Orders & Disciplinary Proceedings'],
  },
  {
    icon: FaShieldAlt, title: 'Industrial Safety Consultancy', tag: 'Safety First', color: 'from-red-500 to-rose-400',
    desc: 'Comprehensive workplace safety solutions to protect people and ensure regulatory compliance.',
    bullets: ['Workplace Safety Audits', 'Risk Assessment & Hazard Mitigation', 'Emergency Preparedness Planning', 'ISO 45001 Certification Support', 'Gap Analysis & Corrective Action Planning'],
  },
  {
    icon: FaGraduationCap, title: 'Training Solutions', tag: 'L&D', color: 'from-green-500 to-teal-400',
    desc: 'Custom training programs for leadership, workforce capability, and compliance.',
    bullets: ['Leadership & Supervisory Development', 'Workforce Capability Building', 'Compliance & Ethics Training', 'POSH Awareness Programs', 'Customized Training Modules'],
  },
  {
    icon: FaHandshake, title: 'Corporate Social Responsibility (CSR)', tag: 'Sustainability', color: 'from-purple-500 to-pink-400',
    desc: 'End-to-end CSR consulting from policy design to monitoring and stakeholder reporting.',
    bullets: ['CSR Policy Design & Framework', 'Project Planning & Monitoring', 'Sustainability Initiatives', 'Stakeholder Engagement & Reporting', 'Impact Assessment'],
  },
  {
    icon: FaCogs, title: 'Operational Excellence Systems', tag: 'Efficiency', color: 'from-amber-500 to-orange-400',
    desc: 'Drive quality and efficiency through proven operational excellence frameworks.',
    bullets: ['TPM Implementation & Training', 'ISO 9001 QMS Certification Support', 'Kaizen, Lean & Six Sigma', 'Process Standardization', 'Continuous Improvement Culture'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="relative py-20 bg-gradient-to-b from-orange-50 via-amber-50 to-white">
        <div className="absolute inset-0 hero-grid-pattern opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-white border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-wider shadow-soft">Our Services</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">Complete <span className="gradient-text">HR & Safety</span> Solutions</h1>
          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">From HR consulting and industrial safety to training and CSR — we handle every dimension of your organizational development needs.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }} className="rounded-2xl border border-slate-100 shadow-soft hover:shadow-glow transition-all overflow-hidden group">
                <div className={`bg-gradient-to-br ${s.color} p-6`}>
                  <div className="flex items-center justify-between">
                    <s.icon className="text-4xl text-white" />
                    <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold">{s.tag}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-extrabold text-white">{s.title}</h3>
                  <p className="mt-2 text-white/80 text-sm">{s.desc}</p>
                </div>
                <div className="p-6 bg-white">
                  <ul className="space-y-2">
                    {s.bullets.map(b => (
                      <li key={b} className="flex items-start gap-2 text-sm text-slate-600">
                        <FaCheckCircle className="text-emerald-500 mt-0.5 shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
