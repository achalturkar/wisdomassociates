'use client'
import { motion } from 'framer-motion'
import { FaLinkedinIn, FaUserTie } from 'react-icons/fa'
import SectionHeading from '@/components/site/SectionHeading'

const team = [
  { name: 'Dr. Suresh Pandilwar', role: 'Founder Director', bio: 'A seasoned HR & Industrial Safety expert with decades of experience transforming organizations across Maharashtra and beyond.', initials: 'SP', color: 'from-orange-500 to-amber-400' },
  { name: 'Sharayu Pandilwar', role: 'Founder Director', bio: 'Co-founder with deep expertise in corporate training, HR strategy, and organizational development for leading industries.', initials: 'SP', color: 'from-green-500 to-teal-400' },
  { name: 'Hemant Suradkar', role: 'Senior Consultant', bio: 'Specialist in Industrial Relations and Labour Law compliance with extensive hands-on advisory experience.', initials: 'HS', color: 'from-blue-500 to-cyan-400' },
  { name: 'Bharat Gupta', role: 'HR & Compliance Expert', bio: 'Expert in HR policy design, statutory compliance and workforce management for manufacturing sector clients.', initials: 'BG', color: 'from-purple-500 to-pink-400' },
  { name: 'Prashant Kathale', role: 'Safety Consultant', bio: 'Certified industrial safety professional specializing in workplace audits, risk assessment and emergency preparedness.', initials: 'PK', color: 'from-red-500 to-rose-400' },
  { name: 'Dr. Renuka Mainde', role: 'Training Specialist', bio: 'Doctorate in behavioral sciences, designs impactful corporate training modules for leadership and soft skill development.', initials: 'RM', color: 'from-amber-500 to-orange-400' },
  { name: 'Shipra Dikshit', role: 'CSR & Compliance', bio: 'Expert in CSR project planning, monitoring, sustainability initiatives and stakeholder engagement reporting.', initials: 'SD', color: 'from-teal-500 to-green-400' },
]

export default function Team() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeading eyebrow="Our People" title="The experts behind Wisdom Associates" subtitle="A team of seasoned HR, safety and training professionals passionate about organizational growth." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-soft hover:shadow-glow transition-all text-center"
            >
              <div className={`mx-auto w-20 h-20 rounded-full bg-gradient-to-br ${m.color} grid place-items-center text-white text-2xl font-extrabold shadow-glow mb-4 group-hover:scale-105 transition`}>
                {m.initials}
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg">{m.name}</h3>
              <p className="text-xs font-bold text-orange-600 uppercase tracking-wider mt-1">{m.role}</p>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed">{m.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
