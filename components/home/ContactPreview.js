'use client'
import Link from 'next/link'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function ContactPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid md:grid-cols-3 gap-6">
        {[
          { icon: FaPhoneAlt, title: 'Call Us', value: '+91 98810 12443', sub: 'Mon–Sat · 9:30am – 7:00pm', href: 'tel:+919881012443' },
          { icon: FaEnvelope, title: 'Email Us', value: 'Wisdomassociatesngp@gmail.com', sub: 'We reply within 24 hours', href: 'mailto:Wisdomassociatesngp@gmail.com' },
          { icon: FaMapMarkerAlt, title: 'Our Office', value: 'Nelco Society, Subhash Nagar', sub: 'Nagpur – 440022, Maharashtra', href: '/contact' },
        ].map((it, i) => (
          <a key={it.title} href={it.href} className="flex items-start gap-4 p-6 rounded-2xl border border-slate-100 shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all bg-white group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-amber-300 grid place-items-center text-white text-lg shrink-0">
              <it.icon />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-500 font-bold">{it.title}</div>
              <div className="mt-1 font-extrabold text-slate-900 text-sm group-hover:text-orange-600 transition">{it.value}</div>
              <div className="mt-0.5 text-xs text-slate-500">{it.sub}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
