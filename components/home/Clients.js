'use client'
import { motion } from 'framer-motion'
import { FaIndustry, FaCar, FaIndustry as FaMfg, FaBolt, FaTree, FaTruck, FaPlane, FaGem, FaWarehouse, FaBuilding } from 'react-icons/fa'
import SectionHeading from '@/components/site/SectionHeading'

const clients = [
  'Akar Industries', 'Shree Sai Industries', 'Bharat Containers Limited', 'Jhonson Lifts Pvt Limited',
  'Savita Auto Industries', 'V S Auto Industries', 'Technocrates India Pvt Limited', 'TeQworth Solutions & Services LLP',
  'Maharashtra Vidyut Nigam Pvt Ltd', 'Mahaminaral Coal Washeries', 'Basant Agro Tech Limited',
  'Yogesh Enterprises Pvt Limited', 'Orange City Alloys Pvt Limited', 'Ideal Tours and Travels',
  'Automark Pvt Limited', 'Replay International Pvt Limited',
]

const trainingClients = [
  { name: 'Ordinance Factory, Ambazari', icon: FaBuilding },
  { name: 'Pee Vee Textiles Limited', icon: FaWarehouse },
  { name: 'Bilt Graphic Papers Products Ltd', icon: FaIndustry },
  { name: 'Mahindra & Mahindra Limited', icon: FaCar },
  { name: 'Videocon Industries Limited', icon: FaBolt },
  { name: 'Power Grid Corporation of India', icon: FaBolt },
  { name: 'Tata Advanced Systems Limited', icon: FaPlane },
  { name: 'Dassault Reliance Aerospace Ltd', icon: FaPlane },
  { name: 'Vedanta Power Limited (TSPL)', icon: FaBolt },
  { name: 'Spacewood Industries', icon: FaIndustry },
  { name: 'Nagpur Auto & Engineering Cluster', icon: FaCar },
  { name: 'Bhansali Polymers Limited', icon: FaGem },
  { name: 'Duraweld Metsys Pvt Limited', icon: FaIndustry },
  { name: 'Minar Hydro', icon: FaBolt },
  { name: 'AMCL Machinery Limited', icon: FaMfg },
  { name: 'Topworth Urja and Power Limited', icon: FaBolt },
  { name: 'Indo Rama Synthetics India Ltd', icon: FaWarehouse },
  { name: 'Shilpa Steel and Power Limited', icon: FaIndustry },
]

export default function Clients() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeading eyebrow="Our Clients" title="Trusted by Industry Leaders" subtitle="From MIDC Nagpur to Pan-India corporations — organizations that trust Wisdom Associates." />

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {clients.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="px-4 py-2 rounded-full border border-orange-200 bg-orange-50 text-sm font-semibold text-slate-700 hover:bg-orange-100 hover:border-orange-400 transition cursor-default"
            >
              {c}
            </motion.span>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-center text-sm font-bold text-orange-600 uppercase tracking-widest mb-8">Wisdom Associates has had the privilege of conducting impactful training programs across leading institutions nationwide</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trainingClients.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-orange-200 hover:bg-orange-50 transition"
              >
                <c.icon className="text-orange-500 text-lg shrink-0" />
                <span className="text-sm font-semibold text-slate-700">{c.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
