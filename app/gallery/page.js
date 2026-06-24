'use client'
import { motion } from 'framer-motion'
import { FaImages } from 'react-icons/fa'
import SectionHeading from '@/components/site/SectionHeading'

const galleryCategories = [
  { label: 'Training Programs', count: 12 },
  { label: 'Industrial Safety Audits', count: 8 },
  { label: 'Workshops & Seminars', count: 10 },
  { label: 'Team Events', count: 6 },
  { label: 'Client Site Visits', count: 9 },
  { label: 'Award Ceremonies', count: 5 },
]

// Placeholder gallery items with gradient backgrounds
const galleryItems = [
  { title: 'Leadership Training – Mahindra & Mahindra', category: 'Training Programs', color: 'from-orange-400 to-amber-300', desc: 'Supervisory development workshop for plant managers' },
  { title: 'Safety Audit – MIDC Hingna', category: 'Industrial Safety Audits', color: 'from-red-400 to-rose-300', desc: 'Comprehensive workplace safety inspection and gap analysis' },
  { title: 'HR Policy Workshop – Bharat Containers', category: 'Workshops & Seminars', color: 'from-blue-400 to-cyan-300', desc: 'HR policies implementation and compliance training' },
  { title: 'Team Building Program', category: 'Team Events', color: 'from-green-400 to-teal-300', desc: 'Outbound team building and leadership activities' },
  { title: 'POSH Awareness Session', category: 'Workshops & Seminars', color: 'from-purple-400 to-pink-300', desc: 'Prevention of Sexual Harassment awareness for employees' },
  { title: 'Tata Advanced Systems Training', category: 'Training Programs', color: 'from-amber-400 to-yellow-300', desc: 'Behavioral-based safety training program' },
  { title: 'ISO 45001 Certification Drive', category: 'Industrial Safety Audits', color: 'from-teal-400 to-emerald-300', desc: 'Certification support and documentation review' },
  { title: 'Vedanta Power – Safety Workshop', category: 'Client Site Visits', color: 'from-indigo-400 to-blue-300', desc: 'Emergency preparedness and safety awareness' },
  { title: 'Annual Achievement Awards', category: 'Award Ceremonies', color: 'from-rose-400 to-pink-300', desc: 'Recognizing excellence in HR and safety practices' },
  { title: 'Communication Skills Workshop', category: 'Training Programs', color: 'from-orange-500 to-orange-300', desc: 'Effective communication for supervisors and managers' },
  { title: 'CSR Project Visit – Nagpur', category: 'Client Site Visits', color: 'from-green-500 to-green-300', desc: 'Stakeholder engagement and CSR monitoring visit' },
  { title: 'Change Management Seminar', category: 'Workshops & Seminars', color: 'from-cyan-400 to-blue-300', desc: 'Managing organizational transformation and change' },
]

export default function GalleryPage() {
  return (
    <>
      <section className="relative py-20 bg-gradient-to-b from-orange-50 via-amber-50 to-white">
        <div className="absolute inset-0 hero-grid-pattern opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-white border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-wider shadow-soft">Gallery</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">Glimpses of Our <span className="gradient-text">Journey</span></h1>
          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">A visual showcase of our training programs, safety audits, workshops, and memorable moments with our clients across India.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {galleryCategories.map((cat, i) => (
              <span key={cat.label} className="px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-sm font-semibold text-slate-700 hover:bg-orange-100 transition cursor-default">
                {cat.label} <span className="text-orange-500 font-bold ml-1">({cat.count})</span>
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-glow transition-all aspect-square cursor-pointer"
              >
                <div className={`w-full h-full bg-gradient-to-br ${item.color} flex flex-col items-center justify-center p-4 group-hover:scale-105 transition-transform duration-300`}>
                  <FaImages className="text-white/60 text-4xl mb-3" />
                  <div className="text-center">
                    <div className="text-white font-bold text-xs text-center leading-tight">{item.title}</div>
                    <div className="text-white/70 text-xs mt-1 hidden group-hover:block">{item.desc}</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-3 w-full">
                    <div className="text-white text-xs font-bold">{item.category}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center rounded-2xl bg-orange-50 border border-orange-200 p-10">
            <FaImages className="text-5xl text-orange-400 mx-auto mb-4" />
            <h3 className="text-xl font-extrabold text-slate-900">More Photos Coming Soon</h3>
            <p className="mt-2 text-slate-600 text-sm max-w-lg mx-auto">We're adding more glimpses from our training programs, workshops, and client engagements. Contact us for program-specific photo albums.</p>
          </div>
        </div>
      </section>
    </>
  )
}
