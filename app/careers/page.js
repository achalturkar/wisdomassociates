'use client'
import { motion } from 'framer-motion'
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaArrowRight, FaEnvelope } from 'react-icons/fa'
import SectionHeading from '@/components/site/SectionHeading'
import CTA from '@/components/home/CTA'

const openings = [
  { title: 'HR Consultant', location: 'Nagpur, MH', type: 'Full-time', dept: 'Consulting', desc: 'Looking for an experienced HR consultant to handle client advisory, policy design, and HR operations management.' },
  { title: 'Industrial Safety Officer', location: 'Nagpur, MH', type: 'Full-time', dept: 'Safety', desc: 'Certified safety professional for conducting workplace audits, risk assessments, and compliance advisory for industrial clients.' },
  { title: 'Corporate Trainer', location: 'Nagpur / Pan-India', type: 'Full-time', dept: 'Training', desc: 'Passionate trainer to design and deliver leadership, soft skills, and compliance training programs across industries.' },
  { title: 'Labour Law Consultant', location: 'Nagpur, MH', type: 'Full-time', dept: 'Compliance', desc: 'Expert in Indian labour laws to provide advisory on IR, compliance, grievance handling, and statutory requirements.' },
]

export default function CareersPage() {
  return (
    <>
      <section className="relative py-20 bg-gradient-to-b from-orange-50 via-amber-50 to-white">
        <div className="absolute inset-0 hero-grid-pattern opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-white border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-wider shadow-soft">Join Our Team</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">Careers at <span className="gradient-text">Wisdom Associates</span></h1>
          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">We're always looking for passionate HR professionals, trainers, and safety experts who share our commitment to organizational excellence.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading eyebrow="Open Positions" title="Current Openings" subtitle="Join our growing team of consultants, trainers and safety professionals." />
          <div className="mt-12 space-y-5">
            {openings.map((job, i) => (
              <motion.div key={job.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="p-6 rounded-2xl border border-slate-100 shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all bg-white flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold">{job.dept}</span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold flex items-center gap-1"><FaClock className="text-xs" />{job.type}</span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold flex items-center gap-1"><FaMapMarkerAlt className="text-xs" />{job.location}</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900">{job.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{job.desc}</p>
                </div>
                <a href={`mailto:Wisdomassociatesngp@gmail.com?subject=Application for ${job.title}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-white font-bold text-sm hover:scale-105 transition shadow-glow shrink-0">
                  Apply Now <FaArrowRight />
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-orange-50 border border-orange-200 p-10 text-center">
            <FaEnvelope className="text-5xl text-orange-400 mx-auto mb-4" />
            <h3 className="text-2xl font-extrabold text-slate-900">Don't see a fit? Send us your resume</h3>
            <p className="mt-2 text-slate-600 max-w-xl mx-auto">We're always open to meeting talented HR, safety, and training professionals. Email us at <span className="font-bold text-orange-600">Wisdomassociatesngp@gmail.com</span></p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
