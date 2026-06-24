'use client'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaCheckCircle, FaUsers, FaLightbulb, FaChartLine } from 'react-icons/fa'
import SectionHeading from '@/components/site/SectionHeading'
import CTA from '@/components/home/CTA'
import Head from 'next/head'



const trainingTopics = [
  'Work Ethics & Work Culture', 'Change Management', 'Time Management', 'Managerial Effectiveness',
  'Role of Supervisors in Safety', 'Team Building and Leadership', 'Interpersonal Skills',
  'Effective Communication Skills', 'HR Policies and its Execution', '5S and Safety',
  'Customer Relationship Management', 'Managing Absenteeism', 'Decision Making',
  'IR Role for Supervisors', 'Growth with SWOT', 'Supervisory Development Techniques',
  'TPM Awareness', 'Discipline & Disciplinary Action', 'Art of Happy Living',
  'Strategic Thinking & Agility', 'Behavioral Based Safety', 'Managing Challenging Employees',
  'Writing Skills', 'What I Can Do for Quality', 'Conflict Resolution',
  'Leadership Styles & Effectiveness', 'Stress Management', 'Aspiration Management',
  'Self Analysis – Johari Window', 'Presentation Skills', 'POSH – Prevention of Sexual Harassment',
  'Growth Ladder – FGD', 'Habits of Organized People', 'Process Control Techniques',
  'How to Deal with Underperforming Employees', 'Project Planning and Delegating',
  'Building Trust & Relationship',
]

const programs = [
  { icon: FaUsers, title: 'Leadership & Supervisory Development', desc: 'Comprehensive programs for managers and supervisors covering leadership styles, decision-making, delegation, and team management.', audience: 'Senior & Middle Management' },
  { icon: FaLightbulb, title: 'Workforce Capability Building', desc: 'Shopfloor-focused training on motivation, teamwork, conflict handling, safety awareness, and production excellence.', audience: 'Frontline & Shopfloor Staff' },
  { icon: FaCheckCircle, title: 'Compliance & Ethics Training', desc: 'Legal awareness, workplace ethics, POSH compliance, safety culture, and statutory requirement training.', audience: 'All Employees' },
  { icon: FaChartLine, title: 'Customized Training Modules', desc: 'Bespoke training designed around your organization\'s specific challenges, goals, and workforce profile.', audience: 'All Levels' },
]

// export const metadata = {
//   title: "Training Programs",
//   description:
//     "Professional industrial safety and corporate training programs for organizations and individuals.",

//   alternates: {
//     canonical: "https://wisdomassociates.com/training",
//   },
// };

export default function TrainingPage() {
  return (
    <>
    <Head>
<title>Training Programs | Wisdom Associates</title>

<meta
name="description"
content="Professional industrial safety and corporate training programs designed to enhance workforce productivity."
/>

<meta
name="keywords"
content="Corporate Training, Safety Training, Leadership Development, Behavioral Training"
/>

<link rel="canonical" href="https://wisdomassociates.com/training"/>
</Head>
      <section className="relative py-20 bg-gradient-to-b from-green-50 via-teal-50 to-white">
        <div className="absolute inset-0 hero-grid-pattern opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-white border border-green-200 text-green-700 text-xs font-bold uppercase tracking-wider shadow-soft">Training Solutions</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">Transformative <span className="gradient-text">Training Programs</span></h1>
          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">We design and deliver impactful training programs that strengthen leadership, communication, and workforce capability across industries.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading eyebrow="Training Programs" title="Programs for Every Level" subtitle="From frontline workers to senior management — we have the right program for your team." />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {programs.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex gap-5 p-7 rounded-2xl bg-white border border-slate-100 shadow-soft hover:shadow-glow transition-all">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-teal-400 grid place-items-center text-white text-2xl shrink-0">
                  <p.icon />
                </div>
                <div>
                  <div className="inline-block px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-bold mb-2">{p.audience}</div>
                  <h3 className="font-extrabold text-slate-900 text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading eyebrow="Training Topics" title="Our Training Topic Library" subtitle="Over 35 carefully curated topics designed to build skills, mindsets, and performance culture." />
          <div className="mt-12 flex flex-wrap gap-3 justify-center">
            {trainingTopics.map((topic, i) => (
              <motion.span
                key={topic}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                className="px-4 py-2 rounded-full border border-green-200 bg-white text-sm font-semibold text-slate-700 hover:bg-green-50 hover:border-green-400 hover:text-green-700 transition cursor-default flex items-center gap-2"
              >
                <FaGraduationCap className="text-green-500 text-xs" /> {topic}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading eyebrow="Safety Training" title="Safety Audits & Certifications" subtitle="Ensuring your workplace meets the highest safety standards." />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              'Comprehensive workplace safety audits',
              'Gap analysis and corrective action planning',
              'ISO 45001 certification support',
              'Monitoring and reporting mechanisms',
            ].map((item, i) => (
              <motion.div key={item} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-5 rounded-xl bg-red-50 border border-red-100 text-sm font-semibold text-slate-700 flex items-start gap-3">
                <FaCheckCircle className="text-red-500 mt-0.5 shrink-0" /> {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
