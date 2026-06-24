'use client'
import { motion } from 'framer-motion'
import { FaHeart, FaHandsHelping, FaSeedling, FaGraduationCap, FaUsers, FaCheckCircle, FaImages } from 'react-icons/fa'
import SectionHeading from '@/components/site/SectionHeading'
import CTA from '@/components/home/CTA'

const ngoActivities = [
  { icon: FaGraduationCap, title: 'Skill Development for Youth', desc: 'Free vocational training programs for underprivileged youth in Nagpur region, equipping them with employable skills for sustainable livelihoods.', color: 'from-green-500 to-teal-400' },
  { icon: FaHandsHelping, title: 'Women Empowerment', desc: 'Workshops and awareness sessions for women on their legal rights, workplace safety, financial literacy, and entrepreneurship.', color: 'from-purple-500 to-pink-400' },
  { icon: FaSeedling, title: 'Environmental Awareness', desc: 'Community-driven initiatives around tree plantation, waste management awareness, and sustainable workplace practices.', color: 'from-emerald-500 to-green-400' },
  { icon: FaUsers, title: 'Community Welfare Programs', desc: 'Health camps, awareness drives, and social welfare activities organized in collaboration with local NGOs and government bodies.', color: 'from-blue-500 to-cyan-400' },
]

const ngoImages = [
  { title: 'Skill Training Camp', color: 'from-green-400 to-teal-300' },
  { title: 'Women Empowerment Workshop', color: 'from-purple-400 to-pink-300' },
  { title: 'Tree Plantation Drive', color: 'from-emerald-400 to-green-300' },
  { title: 'Health Awareness Camp', color: 'from-blue-400 to-cyan-300' },
  { title: 'Youth Development Program', color: 'from-amber-400 to-orange-300' },
  { title: 'Community Outreach', color: 'from-rose-400 to-pink-300' },
]

export default function NgoPage() {
  return (
    <>
      <section className="relative py-20 bg-gradient-to-b from-green-50 via-emerald-50 to-white">
        <div className="absolute inset-0 hero-grid-pattern opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-white border border-green-200 text-green-700 text-xs font-bold uppercase tracking-wider shadow-soft">Social Impact</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">Giving Back to <span className="gradient-text">Society</span></h1>
          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">Wisdom Associates believes that true success is measured by the positive impact we create in the communities around us. Our NGO initiatives focus on skill development, women empowerment, and community welfare in the Nagpur region and beyond.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading eyebrow="Our Social Mission" title="Making a Difference Beyond Business" subtitle="We extend our expertise in human development to underserved communities through meaningful social initiatives." />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {ngoActivities.map((a, i) => (
              <motion.div key={a.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex gap-5 p-7 rounded-2xl bg-white border border-slate-100 shadow-soft hover:shadow-glow transition-all">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${a.color} grid place-items-center text-white text-2xl shrink-0`}>
                  <a.icon />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg">{a.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading eyebrow="NGO Activities" title="Glimpses of Our Social Work" subtitle="Photos from our community programs and social initiatives across Nagpur." />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-5">
            {ngoImages.map((img, i) => (
              <motion.div key={img.title} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className={`rounded-2xl overflow-hidden shadow-soft hover:shadow-glow transition-all aspect-video bg-gradient-to-br ${img.color} flex items-center justify-center group hover:-translate-y-1`}>
                <div className="text-center">
                  <FaImages className="text-white/60 text-3xl mx-auto mb-2" />
                  <div className="text-white font-bold text-sm px-4">{img.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <FaHeart className="text-5xl text-rose-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Partner with Us for Social Good</h2>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">If your organization is looking to fulfill CSR obligations or wants to collaborate on community development initiatives, we'd love to explore partnership opportunities.</p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            {['Skill Development', 'Women Empowerment', 'Safety Awareness', 'Environmental Initiatives', 'Health Camps', 'Youth Programs'].map(tag => (
              <span key={tag} className="flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-200 text-sm font-semibold text-slate-700">
                <FaCheckCircle className="text-rose-500 text-xs" /> {tag}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 to-pink-400 text-white font-bold shadow-glow hover:scale-[1.03] transition">
              <FaHandsHelping /> Get Involved
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
