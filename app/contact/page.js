'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,
  FaWhatsapp, FaCheckCircle, FaClock, FaArrowRight,
} from 'react-icons/fa'
import Head from 'next/head'

// ─── WhatsApp message builder ─────────────────────────────────────────────────
function buildWhatsAppMessage(form) {
  return encodeURIComponent(
    `Hello Wisdom Associates,\n\n` +
    `*Name:* ${form.name}\n` +
    `*Email:* ${form.email}\n` +
    `*Phone:* ${form.phone}\n` +
    `*Service:* ${form.service}\n` +
    `*Message:* ${form.message || '—'}\n\n` +
    `Sent via wisdomassociates.com/contact`
  )
}

const CONTACT_CARDS = [
  {
    icon: FaPhoneAlt,
    title: 'Call Us',
    value: '+91 98810 12443',
    sub: 'Mon – Sat · 9:30 am – 7:00 pm',
    href: 'tel:+919881012443',
    gradient: 'from-orange-500 to-amber-400',
    ring: 'ring-orange-100',
  },
  {
    icon: FaEnvelope,
    title: 'General Enquiry',
    value: 'wisdomassociatesngp@gmail.com',
    sub: 'We reply within 24 hours',
    href: 'mailto:wisdomassociatesngp@gmail.com',
    gradient: 'from-rose-500 to-pink-400',
    ring: 'ring-rose-100',
  },
  {
    icon: FaEnvelope,
    title: 'Director',
    value: 'dr.suresh@wisdomassociates.com',
    sub: 'For strategic consultancy',
    href: 'mailto:dr.suresh@wisdomassociates.com',
    gradient: 'from-violet-600 to-indigo-500',
    ring: 'ring-violet-100',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Head Office',
    value: 'Nelco Society, Subhash Nagar',
    sub: 'Nagpur – 440022, Maharashtra',
    href: 'https://maps.app.goo.gl/QoFf9su129RNJuQp6',
    gradient: 'from-teal-500 to-emerald-400',
    ring: 'ring-teal-100',
  },
]

const SERVICES = [
  'HR Consultancy',
  'Industrial Relations & Compliance',
  'Industrial Safety',
  'Training Solutions',
  'CSR Consulting',
  'Operational Excellence',
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    service: 'HR Consultancy', message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim())  e.name  = 'Name is required'
    if (!form.phone.trim()) e.phone = 'Phone is required'
    if (!form.email.trim()) {
      e.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      e.email = 'Enter a valid email'
    }
    return e
  }

  // Send to WhatsApp
  const onSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    const msg = buildWhatsAppMessage(form)
    window.open(`https://wa.me/919881012443?text=${msg}`, '_blank')

    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setForm({ name: '', email: '', phone: '', service: 'HR Consultancy', message: '' })
  }

  return (
    <>
      <Head>
        <title>Contact Us | Wisdom Associates</title>
        <meta name="description" content="Contact Wisdom Associates for HR consultancy, safety training and compliance solutions." />
        <meta name="keywords" content="Contact Wisdom Associates, HR Consultancy Nagpur, Safety Training" />
        <link rel="canonical" href="https://wisdomassociates.com/contact" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative py-24 bg-gradient-to-b from-orange-50 via-amber-50 to-white overflow-hidden">
        <div className="absolute inset-0 hero-grid-pattern opacity-40" />

        {/* Decorative blobs */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-orange-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-10 -left-16 w-64 h-64 bg-amber-200 rounded-full opacity-20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-widest shadow-sm">
            Get in Touch
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us about your organisation's needs. We'll get back to you within 24 hours.
          </p>

          {/* Quick stat pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { icon: FaClock,    text: '24-hr response' },
              { icon: FaWhatsapp, text: 'WhatsApp support' },
              { icon: FaPhoneAlt, text: 'Mon – Sat, 9:30 – 7:00' },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="inline-flex items-center gap-1.5 bg-white border border-orange-100 text-slate-600 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                <Icon className="text-orange-400 text-[11px]" /> {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact cards ──────────────────────────────────────────────────── */}
      <section className="pt-16 pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {CONTACT_CARDS.map((it, i) => (
              <motion.a
                key={it.title}
                href={it.href}
                target={it.href.startsWith('http') ? '_blank' : undefined}
                rel={it.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={`group relative p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 ring-4 ${it.ring} overflow-hidden`}
              >
                {/* Subtle gradient wash on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${it.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${it.gradient} text-white flex items-center justify-center text-lg shadow-sm mb-4`}>
                  <it.icon />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">{it.title}</p>
                <p className="font-bold text-slate-900 text-sm leading-snug break-all">{it.value}</p>
                <p className="text-xs text-slate-500 mt-1">{it.sub}</p>

                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  {it.href.startsWith('tel:') ? 'Call now' : it.href.startsWith('mailto:') ? 'Send email' : 'Get directions'}
                  <FaArrowRight className="text-[10px]" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + Map ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* ── Form ── */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {submitted ? (
                <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-14 text-center h-full flex flex-col items-center justify-center">
                  <FaCheckCircle className="text-6xl text-emerald-500 mb-5" />
                  <div className="text-2xl font-extrabold text-slate-900">Message sent!</div>
                  <p className="mt-2 text-slate-600 max-w-sm">
                    Your message has been opened in WhatsApp. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <div className="rounded-2xl border border-slate-100 shadow-sm bg-white overflow-hidden">
                  {/* Form header */}
                  <div className="bg-gradient-to-r from-orange-500 to-amber-400 px-7 py-5">
                    <h2 className="text-xl font-extrabold text-white">Send us a message</h2>
                    <p className="text-orange-100 text-sm mt-0.5">Fills in WhatsApp — fast and direct</p>
                  </div>

                  <form onSubmit={onSubmit} noValidate className="p-7 space-y-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Full Name <span className="text-orange-500">*</span>
                      </label>
                      <input
                        name="name" value={form.name} onChange={onChange}
                        type="text" placeholder="Dr. Suresh Pandilwar"
                        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition
                          ${errors.name
                            ? 'border-red-400 focus:ring-2 focus:ring-red-100'
                            : 'border-slate-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100'}`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Email + Phone */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                          Email <span className="text-orange-500">*</span>
                        </label>
                        <input
                          name="email" value={form.email} onChange={onChange}
                          type="email" placeholder="you@company.com"
                          className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition
                            ${errors.email
                              ? 'border-red-400 focus:ring-2 focus:ring-red-100'
                              : 'border-slate-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100'}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                          Phone <span className="text-orange-500">*</span>
                        </label>
                        <input
                          name="phone" value={form.phone} onChange={onChange}
                          type="tel" placeholder="+91 98765 43210"
                          className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition
                            ${errors.phone
                              ? 'border-red-400 focus:ring-2 focus:ring-red-100'
                              : 'border-slate-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100'}`}
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Service of Interest</label>
                      <select
                        name="service" value={form.service} onChange={onChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-400 outline-none text-sm cursor-pointer"
                      >
                        {SERVICES.map(s => <option key={s}>{s}</option>)}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
                      <textarea
                        name="message" value={form.message} onChange={onChange}
                        rows={4}
                        placeholder="Tell us about your organisation and what you need…"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none text-sm resize-none"
                      />
                    </div>

                    {/* Buttons */}
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 text-white font-bold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-orange-200 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
                    >
                      <FaWhatsapp className="text-lg" />
                      Send via WhatsApp
                    </button>

                    <a
                      href="mailto:wisdomassociatesngp@gmail.com"
                      className="w-full py-3.5 rounded-xl border-2 border-slate-200 text-slate-600 font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-50 transition"
                    >
                      <FaEnvelope className="text-base" />
                      Or send by Email
                    </a>

                    <p className="text-center text-xs text-slate-400">
                      Clicking "Send via WhatsApp" opens WhatsApp with your details pre-filled.
                    </p>
                  </form>
                </div>
              )}
            </motion.div>

            {/* ── Map + Info ── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-5"
            >
              {/* Google Maps embed */}
              <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-100" style={{ height: 360 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.8293399329878!2d79.0416316!3d21.119368999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1eb197ac56d%3A0x36ea9bdb37bccf7c!2sWisdom%20Associates!5e0!3m2!1sen!2sin!4v1782325754946!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Wisdom Associates location"
                />
              </div>

              {/* Address card */}
              <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 p-6 flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 text-white flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-0.5">Our Office</p>
                    <p className="font-bold text-slate-900">Wisdom Associates</p>
                    <p className="text-sm text-slate-600">Nelco Society, Subhash Nagar<br />Nagpur – 440022, Maharashtra, India</p>
                  </div>
                </div>

                <div className="h-px bg-orange-100" />

                {/* Working hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-400 text-white flex items-center justify-center shrink-0">
                    <FaClock />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-0.5">Working Hours</p>
                    <p className="font-bold text-slate-900">Mon – Saturday</p>
                    <p className="text-sm text-slate-600">9:30 am – 7:00 pm IST</p>
                  </div>
                </div>

                {/* Directions button */}
                <a
                  href="https://maps.app.goo.gl/QoFf9su129RNJuQp6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white border border-orange-200 text-orange-600 font-bold text-sm hover:bg-orange-50 transition"
                >
                  <FaMapMarkerAlt />
                  Open in Google Maps
                  <FaArrowRight className="text-xs" />
                </a>
              </div>

              {/* WhatsApp shortcut */}
              <a
                href="https://wa.me/919881012443"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 p-5 text-white shadow-md hover:shadow-green-200 hover:shadow-lg hover:scale-[1.01] transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-2xl shrink-0">
                  <FaWhatsapp />
                </div>
                <div>
                  <p className="font-extrabold text-base">Chat on WhatsApp</p>
                  <p className="text-green-100 text-sm">Quickest way to reach us</p>
                </div>
                <FaArrowRight className="ml-auto text-white/60" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}