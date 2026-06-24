'use client'

import { motion } from 'framer-motion'
import { FaImages } from 'react-icons/fa'
import Image from 'next/image'

const galleryCategories = [
  { label: 'Training Programs', count: 12 },
  { label: 'Industrial Safety Audits', count: 8 },
  { label: 'Workshops & Seminars', count: 10 },
  { label: 'Team Events', count: 6 },
  { label: 'Client Site Visits', count: 9 },
  { label: 'Award Ceremonies', count: 5 },
]

const galleryItems = [
  {
    title: 'Leadership Training – Mahindra & Mahindra',
    category: 'Training Programs',
    image: '/gallery/wa1.png',
    desc: 'Supervisory development workshop for plant managers'
  },
  {
    title: 'Safety Audit – MIDC Hingna',
    category: 'Industrial Safety Audits',
    image: '/gallery/wa2.png',
    desc: 'Comprehensive workplace safety inspection and gap analysis'
  },
  {
    title: 'HR Policy Workshop – Bharat Containers',
    category: 'Workshops & Seminars',
    image: '/gallery/wa3.png',
    desc: 'HR policies implementation and compliance training'
  },
  {
    title: 'Team Building Program',
    category: 'Team Events',
    image: '/gallery/wa4.png',
    desc: 'Outbound team building and leadership activities'
  },
  {
    title: 'POSH Awareness Session',
    category: 'Workshops & Seminars',
    image: '/gallery/wa5.png',
    desc: 'Prevention of Sexual Harassment awareness for employees'
  },
  {
    title: 'Tata Advanced Systems Training',
    category: 'Training Programs',
    image: '/gallery/wa6.png',
    desc: 'Behavioral-based safety training program'
  },
  {
    title: 'ISO 45001 Certification Drive',
    category: 'Industrial Safety Audits',
    image: '/gallery/wa7.png',
    desc: 'Certification support and documentation review'
  },
  {
    title: 'Vedanta Power – Safety Workshop',
    category: 'Client Site Visits',
    image: '/gallery/wa8.png',
    desc: 'Emergency preparedness and safety awareness'
  },
  {
    title: 'Annual Achievement Awards',
    category: 'Award Ceremonies',
    image: '/gallery/wa9.png',
    desc: 'Recognizing excellence in HR and safety practices'
  }
]

export default function GalleryClient() {
  return (
    <>
      <section className="relative py-20 bg-gradient-to-b from-orange-50 via-amber-50 to-white">
        <div className="absolute inset-0 hero-grid-pattern opacity-50"></div>

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-white border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-wider shadow-soft">
            Gallery
          </span>

          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
            Glimpses of Our <span className="gradient-text">Journey</span>
          </h1>

          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A visual showcase of our training programs, safety audits,
            workshops, and memorable moments with our clients across India.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {galleryCategories.map((cat) => (
              <span
                key={cat.label}
                className="px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-sm font-semibold text-slate-700"
              >
                {cat.label}
                <span className="text-orange-500 font-bold ml-1">
                  ({cat.count})
                </span>
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
                className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-glow transition-all aspect-square"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4">
                    <div className="text-white font-bold text-sm leading-tight">
                      {item.title}
                    </div>

                    <div className="text-white/80 text-xs mt-2 hidden group-hover:block">
                      {item.desc}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-3 w-full">
                    <div className="text-white text-xs font-bold">
                      {item.category}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center rounded-2xl bg-orange-50 border border-orange-200 p-10">
            <FaImages className="text-5xl text-orange-400 mx-auto mb-4" />

            <h3 className="text-xl font-extrabold text-slate-900">
              More Photos Coming Soon
            </h3>

            <p className="mt-2 text-slate-600 text-sm max-w-lg mx-auto">
              We're adding more glimpses from our training programs, workshops,
              and client engagements. Contact us for program-specific photo
              albums.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}