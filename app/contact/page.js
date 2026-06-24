'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaCheckCircle } from 'react-icons/fa'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: 'HR Consultancy', message: '' })
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', phone: '', service: 'HR Consultancy', message: '' })
  }

  return (
    <>
      <section className="relative py-20 bg-gradient-to-b from-orange-50 via-amber-50 to-white">
        <div className="absolute inset-0 hero-grid-pattern opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-white border border-orange-300 text-orange-600 text-xs font-bold uppercase tracking-wider shadow-soft">Get in Touch</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="mt-4 text-slate-600 text-lg">We'd love to hear about your organization's needs.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-3 gap-6 mb-16">
          {[
            { icon: FaPhoneAlt, title: 'Call Us', value: '+91 98810 12443', sub: 'Mon–Sat · 9:30am – 7:00pm', href: 'tel:+919881012443' },
            { icon: FaEnvelope, title: 'Email Us', value: 'Wisdomassociatesngp@gmail.com', sub: 'We reply within 24 hours', href: 'mailto:Wisdomassociatesngp@gmail.com' },
            { icon: FaMapMarkerAlt, title: 'Head Office', value: 'Nelco Society, Subhash Nagar', sub: 'Nagpur – 440022, Maharashtra, India', href: '#' },
          ].map((it, i) => (
            <motion.a key={it.title} href={it.href} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="p-7 rounded-3xl bg-gradient-to-br from-white to-orange-50 border border-orange-100 shadow-soft hover:shadow-glow transition block">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-300 text-white grid place-items-center text-xl"><it.icon /></div>
              <div className="mt-4 text-xs uppercase tracking-wider text-slate-500 font-bold">{it.title}</div>
              <div className="mt-1 font-extrabold text-slate-900 text-lg">{it.value}</div>
              <div className="mt-1 text-sm text-slate-500">{it.sub}</div>
            </motion.a>
          ))}
        </div>

        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          {submitted ? (
            <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-10 text-center">
              <FaCheckCircle className="text-5xl text-emerald-500 mx-auto mb-4" />
              <div className="text-2xl font-extrabold text-slate-900">Thank you!</div>
              <p className="mt-2 text-slate-600">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="rounded-2xl border border-slate-100 shadow-soft p-8 bg-white">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Send us a message</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Dr. Suresh Pandilwar' },
                  { name: 'email', label: 'Email', type: 'email', placeholder: 'you@company.com' },
                  { name: 'phone', label: 'Phone', type: 'tel', placeholder: '+91 98765 43210' },
                ].map(f => (
                  <div key={f.name} className={f.name === 'name' ? 'sm:col-span-2' : ''}>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">{f.label}</label>
                    <input name={f.name} value={form[f.name]} onChange={onChange} type={f.type} placeholder={f.placeholder} required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none text-sm" />
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Service of Interest</label>
                  <select name="service" value={form.service} onChange={onChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-400 outline-none text-sm">
                    {['HR Consultancy', 'Industrial Relations & Compliance', 'Industrial Safety', 'Training Solutions', 'CSR Consulting', 'Operational Excellence'].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
                  <textarea name="message" value={form.message} onChange={onChange} rows={5} placeholder="Tell us about your organization and what you need..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none text-sm resize-none" />
                </div>
              </div>
              <button type="submit" className="mt-6 w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 text-white font-bold hover:scale-[1.02] transition shadow-glow">
                Send Message
              </button>
              <a href="https://wa.me/919881012443" target="_blank" rel="noopener noreferrer" className="mt-3 w-full py-4 rounded-xl border-2 border-green-400 text-green-700 font-bold flex items-center justify-center gap-2 hover:bg-green-50 transition">
                <FaWhatsapp className="text-xl" /> Chat on WhatsApp
              </a>
            </form>
          )}
        </div>
      </section>

      <section className="py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-soft h-72 bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center">
            <div className="text-center">
              <FaMapMarkerAlt className="text-5xl text-orange-500 mx-auto mb-3" />
              <div className="text-xl font-extrabold text-slate-900">Nelco Society, Subhash Nagar</div>
              <div className="text-slate-600 mt-1">Nagpur – 440022, Maharashtra, India</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
