'use client'
import { motion } from 'framer-motion'
import { FaBullseye, FaEye, FaHeart, FaCheckCircle } from 'react-icons/fa'
import SectionHeading from '@/components/site/SectionHeading'
import CTA from '@/components/home/CTA'
import Stats from '@/components/home/Stats'
import Team from '@/components/home/Team'

const values = [
  { icon: FaBullseye, title: 'Our Mission', desc: 'Provide expert HR, IR, CSR and safety consultancy aligned with organizational goals. Design and deliver impactful training programs that strengthen leadership, communication, and workforce capability. Promote workplace safety culture through audits, advisory, and awareness initiatives.' },
  { icon: FaEye, title: 'Our Vision', desc: 'To be a leading partner in Human Resource, Industrial Safety, and Training consultancy, empowering organizations to build compliant, safe, and people-centric workplaces that foster innovation, productivity, and sustainable growth.' },
  { icon: FaHeart, title: 'Our Values', desc: 'Integrity. Excellence. Empathy. Result-Orientation. We partner with clients to transform challenges into opportunities, ensuring measurable outcomes and long-term organizational success.' },
]

export default function AboutPage() {
  return (
    <>
      <section className="relative py-20 bg-gradient-to-b from-orange-50 via-amber-50 to-white">
        <div className="absolute inset-0 hero-grid-pattern opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-white border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-wider shadow-soft">About Us</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">Building <span className="gradient-text">People-First</span> Organizations</h1>
          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">Wisdom Associates is a premier HR, Industrial Safety & Training consultancy based in Nagpur, Maharashtra, committed to empowering organizations and individuals to achieve excellence.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
            <span className="text-orange-600 font-bold text-sm uppercase tracking-wider">Our Story</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold leading-tight">From Nagpur to Pan-India: A decade of impact</h2>
            <p className="mt-5 text-slate-600 leading-relaxed">Founded by Dr. Suresh Pandilwar and Sharayu Pandilwar, Wisdom Associates began with a mission to bridge the gap between organizational aspiration and human capability. Based in Nagpur, Maharashtra, we have grown into a respected name in HR consulting, industrial safety, and corporate training.</p>
            <p className="mt-4 text-slate-600 leading-relaxed">Today, we serve over 50 companies across India — from MIDC industrial clusters in Nagpur to Fortune 500 plants across the country — delivering measurable impact through expert consultation and training.</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {['Based in Nagpur, MH', '12+ Years Experience', 'Pan-India Training Reach', '50+ Active Clients'].map(t => (
                <div key={t} className="flex items-center gap-2 text-sm font-semibold text-slate-700"><FaCheckCircle className="text-emerald-500 shrink-0" /> {t}</div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} className="relative">
            <div className="rounded-3xl overflow-hidden shadow-glow bg-gradient-to-br from-orange-100 to-amber-100 h-[460px] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl font-extrabold gradient-text">12+</div>
                <div className="text-2xl font-bold text-slate-700 mt-2">Years of Excellence</div>
                <div className="mt-4 text-slate-600">Serving organizations across India with HR, Safety & Training solutions</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading eyebrow="What Drives Us" title="Mission, Vision & Values" subtitle="The principles that shape every engagement, every training, every advisory." />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.1 }} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-soft hover:shadow-glow transition">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-300 grid place-items-center text-white text-2xl"><v.icon /></div>
                <h3 className="mt-5 text-xl font-bold">{v.title}</h3>
                <p className="mt-2 text-slate-600 leading-relaxed text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Team />
      <Stats />
      <CTA />
    </>
  )
}
