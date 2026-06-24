'use client'

import Head from 'next/head'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaImages, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Image from 'next/image'

// ─── Data ─────────────────────────────────────────────────────────────────────

const galleryCategories = [
  { label: 'All', count: 9 },
  { label: 'Training Programs', count: 3 },
  { label: 'Industrial Safety Audits', count: 2 },
  { label: 'Workshops & Seminars', count: 2 },
  { label: 'Team Events', count: 1 },
  { label: 'Client Site Visits', count: 1 },
  { label: 'Award Ceremonies', count: 1 },
]

const galleryItems = [
  {
    title: 'Leadership Training – Mahindra & Mahindra',
    category: 'Training Programs',
    image: '/gallery/wa1.png',
    desc: 'Supervisory development workshop for plant managers',
  },
  {
    title: 'Safety Audit – MIDC Hingna',
    category: 'Industrial Safety Audits',
    image: '/gallery/wa2.png',
    desc: 'Comprehensive workplace safety inspection and gap analysis',
  },
  {
    title: 'HR Policy Workshop – Bharat Containers',
    category: 'Workshops & Seminars',
    image: '/gallery/wa3.png',
    desc: 'HR policies implementation and compliance training',
  },
  {
    title: 'Team Building Program',
    category: 'Team Events',
    image: '/gallery/wa4.png',
    desc: 'Outbound team building and leadership activities',
  },
  {
    title: 'POSH Awareness Session',
    category: 'Workshops & Seminars',
    image: '/gallery/wa5.png',
    desc: 'Prevention of Sexual Harassment awareness for employees',
  },
  {
    title: 'Tata Advanced Systems Training',
    category: 'Training Programs',
    image: '/gallery/wa6.png',
    desc: 'Behavioral-based safety training program',
  },
  {
    title: 'ISO 45001 Certification Drive',
    category: 'Industrial Safety Audits',
    image: '/gallery/wa7.png',
    desc: 'Certification support and documentation review',
  },
  {
    title: 'Vedanta Power – Safety Workshop',
    category: 'Client Site Visits',
    image: '/gallery/wa8.png',
    desc: 'Emergency preparedness and safety awareness',
  },
  {
    title: 'Annual Achievement Awards',
    category: 'Award Ceremonies',
    image: '/gallery/wa9.png',
    desc: 'Recognizing excellence in HR and safety practices',
  },
]

// ─── Lightbox ─────────────────────────────────────────────────────────────────

function Lightbox({ items, activeIndex, onClose, onPrev, onNext }) {
  const item = items[activeIndex]
  if (!item) return null

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
          aria-label="Close"
        >
          <FaTimes />
        </button>

        {/* Prev */}
        {activeIndex > 0 && (
          <button
            onClick={(e) => { e.stopPropagation(); onPrev() }}
            className="absolute left-4 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-10"
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>
        )}

        {/* Next */}
        {activeIndex < items.length - 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); onNext() }}
            className="absolute right-4 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-10"
            aria-label="Next"
          >
            <FaChevronRight />
          </button>
        )}

        {/* Image */}
        <motion.div
          key={activeIndex}
          initial={{ scale: 0.93, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.93, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-4xl max-h-[80vh] w-[90vw] flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full" style={{ maxHeight: 'calc(80vh - 80px)' }}>
            <Image
              src={item.image}
              alt={item.title}
              width={1200}
              height={900}
              className="rounded-2xl object-contain max-h-[70vh] w-full shadow-2xl"
              style={{ objectFit: 'contain' }}
            />
          </div>

          {/* Caption */}
          <div className="mt-4 text-center px-4">
            <p className="text-white font-bold text-base">{item.title}</p>
            <p className="text-white/60 text-sm mt-1">{item.desc}</p>
            <span className="inline-block mt-2 text-xs font-semibold text-orange-400 bg-orange-400/10 px-3 py-1 rounded-full">
              {item.category}
            </span>
          </div>

          {/* Counter */}
          <p className="mt-3 text-white/30 text-xs">{activeIndex + 1} / {items.length}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// ─── Masonry Grid ─────────────────────────────────────────────────────────────
// CSS columns masonry — works without JS height calculation, images are never
// cropped because we use natural aspect ratio (no aspect-square / object-cover).

function MasonryGrid({ items, onItemClick }) {
  return (
    <div
      className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4"
      style={{ columnGap: '1rem' }}
    >
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
          className="break-inside-avoid mb-4 group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 bg-orange-50"
          onClick={() => onItemClick(i)}
        >
          {/* Natural-height image — no crop */}
          <div className="relative w-full">
            <Image
              src={item.image}
              alt={item.title}
              width={600}
              height={600}
              className="w-full h-auto block group-hover:scale-[1.03] transition-transform duration-500"
              style={{ display: 'block' }}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>

          {/* Hover overlay — slides up from bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <span className="inline-block self-start text-[10px] font-bold uppercase tracking-widest text-orange-300 bg-orange-500/20 px-2 py-0.5 rounded-full mb-1.5">
              {item.category}
            </span>
            <p className="text-white font-bold text-sm leading-tight">{item.title}</p>
            <p className="text-white/70 text-xs mt-1 leading-snug">{item.desc}</p>
          </div>

          {/* "Zoom" icon badge top-right */}
          <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center shadow">
            <svg className="w-3.5 h-3.5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zM11 8v6M8 11h6" />
            </svg>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  const openLightbox = (i) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)
  const goPrev = () => setLightboxIndex((idx) => Math.max(0, idx - 1))
  const goNext = () => setLightboxIndex((idx) => Math.min(filtered.length - 1, idx + 1))

  return (
    <>
      <Head>
        <title>Gallery | Training Programs, Events & Activities | Wisdom Associates</title>
        <meta name="description" content="Explore the gallery of Wisdom Associates showcasing training sessions, industrial safety programs, workshops, awareness campaigns, CSR activities, and memorable events." />
        <meta name="keywords" content="Gallery, Training Gallery, Industrial Safety Events, Corporate Training Photos, Workshops, CSR Activities, Seminars, Wisdom Associates Gallery" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Wisdom Associates" />
        <link rel="canonical" href="https://wisdomassociates.com/gallery" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gallery | Wisdom Associates" />
        <meta property="og:description" content="Explore photos of training programs, workshops, events, and social initiatives conducted by Wisdom Associates." />
        <meta property="og:url" content="https://wisdomassociates.com/gallery" />
        <meta property="og:site_name" content="Wisdom Associates" />
        <meta property="og:image" content="https://wisdomassociates.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gallery | Wisdom Associates" />
        <meta name="twitter:description" content="Photos from training sessions, industrial safety programs, workshops and events." />
        <meta name="twitter:image" content="https://wisdomassociates.com/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative py-20 bg-gradient-to-b from-orange-50 via-amber-50 to-white overflow-hidden">
        <div className="absolute inset-0 hero-grid-pattern opacity-50" />
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-white border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-wider shadow-sm">
            Gallery
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
            Glimpses of Our{' '}
            <span className="gradient-text">Journey</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A visual showcase of our training programs, safety audits, workshops, and memorable moments with our clients across India.
          </p>
        </div>
      </section>

      {/* ── Gallery ───────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          {/* ── Category filter pills ── */}
          <div className="flex flex-wrap gap-2.5 justify-center mb-12">
            {galleryCategories.map((cat) => {
              const isActive = activeCategory === cat.label
              return (
                <button
                  key={cat.label}
                  onClick={() => setActiveCategory(cat.label)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border
                    ${isActive
                      ? 'bg-orange-500 border-orange-500 text-white shadow-md shadow-orange-200'
                      : 'bg-orange-50 border-orange-200 text-slate-700 hover:bg-orange-100'}`}
                >
                  {cat.label}
                  <span className={`ml-1.5 font-bold ${isActive ? 'text-orange-100' : 'text-orange-500'}`}>
                    ({cat.count})
                  </span>
                </button>
              )
            })}
          </div>

          {/* ── Masonry grid ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {filtered.length === 0 ? (
                <p className="text-center text-slate-400 py-20">No items in this category yet.</p>
              ) : (
                <MasonryGrid items={filtered} onItemClick={openLightbox} />
              )}
            </motion.div>
          </AnimatePresence>

          {/* ── Coming soon footer ── */}
          <div className="mt-14 text-center rounded-2xl bg-orange-50 border border-orange-200 p-10">
            <FaImages className="text-5xl text-orange-400 mx-auto mb-4" />
            <h3 className="text-xl font-extrabold text-slate-900">More Photos Coming Soon</h3>
            <p className="mt-2 text-slate-600 text-sm max-w-lg mx-auto">
              We're adding more glimpses from our training programs, workshops, and client engagements.
              Contact us for program-specific photo albums.
            </p>
          </div>
        </div>
      </section>

      {/* ── Lightbox ─────────────────────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          activeIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </>
  )
}