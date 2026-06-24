import Link from 'next/link'
import {
  FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter,
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp,
  FaArrowRight,
} from 'react-icons/fa'

const QUICK_LINKS = [
  { label: 'Home',     href: '/' },
  { label: 'About',    href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Training', href: '/training' },
  { label: 'Gallery',  href: '/gallery' },
  { label: 'NGO',      href: '/ngo' },
  { label: 'Contact',  href: '/contact' },
]

const SERVICES = [
  { label: 'HR Consultancy',        href: '/services#hr' },
  { label: 'Industrial Relations',  href: '/services#ir' },
  { label: 'Industrial Safety',     href: '/services#safety' },
  { label: 'Training & Development',href: '/training' },
  { label: 'CSR Consulting',        href: '/services#csr' },
  { label: 'Operational Excellence',href: '/services#ops' },
]

const SOCIALS = [
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaFacebookF,  href: '#', label: 'Facebook' },
  { icon: FaInstagram,  href: '#', label: 'Instagram' },
  { icon: FaWhatsapp,   href: 'https://wa.me/919881012443', label: 'WhatsApp' },
]

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-300 overflow-hidden">

      {/* ── Animated background ──────────────────────────────────────────────
          Three slow-drifting blobs in orange/amber/blue that are blurred
          enough to never obscure text, but give the footer life.
      ─────────────────────────────────────────────────────────────────────── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blob 1 – orange, top-left */}
        <div className="footer-blob absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-orange-500/10 blur-[96px] animate-blob-1" />
        {/* Blob 2 – amber, bottom-right */}
        <div className="footer-blob absolute -bottom-40 -right-24 w-[520px] h-[520px] rounded-full bg-amber-400/10 blur-[96px] animate-blob-2" />
        {/* Blob 3 – blue accent, center */}
        <div className="footer-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full bg-blue-600/8 blur-[80px] animate-blob-3" />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.3) 1px,transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* ── Top divider with gradient ───────────────────────────────────────── */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      {/* ── Main content ────────────────────────────────────────────────────── */}
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* ── Brand col (wider) ─────────────────────────────────────────── */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <img
                src="/logo/walogo.png"
                alt="Wisdom Associates"
                className="h-12 w-auto"
              />
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-slate-400 max-w-xs">
              A premium HR consultancy, Industrial Safety &amp; Training firm empowering
              organisations across India to build compliant, safe, and people-centric workplaces.
            </p>

            {/* Social row */}
            <div className="flex gap-2.5 mt-6">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/8 text-slate-400 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-200"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>

            {/* Cert badge */}
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/8 text-xs text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              ISO-certified methodologies · 12+ years
            </div>
          </div>

          {/* ── Quick Links ───────────────────────────────────────────────── */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-orange-500" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group flex items-center gap-1.5 text-sm text-slate-400 hover:text-orange-400 transition-colors duration-150"
                  >
                    <FaArrowRight className="text-[9px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-150 shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ──────────────────────────────────────────────────── */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-orange-500" />
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group flex items-center gap-1.5 text-sm text-slate-400 hover:text-orange-400 transition-colors duration-150"
                  >
                    <FaArrowRight className="text-[9px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-150 shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ───────────────────────────────────────────────────── */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-orange-500" />
              Reach Us
            </h4>

            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.app.goo.gl/QoFf9su129RNJuQp6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 group"
                >
                  <span className="mt-0.5 w-7 h-7 rounded-lg bg-orange-500/15 flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt className="text-orange-400 text-xs" />
                  </span>
                  <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                    Nelco Society, Subhash Nagar,<br />
                    Nagpur – 440022, Maharashtra, India
                  </span>
                </a>
              </li>

              <li>
                <a href="tel:+919881012443" className="flex gap-3 items-center group">
                  <span className="w-7 h-7 rounded-lg bg-orange-500/15 flex items-center justify-center shrink-0">
                    <FaPhoneAlt className="text-orange-400 text-xs" />
                  </span>
                  <span className="text-sm text-slate-400 group-hover:text-orange-400 transition-colors">
                    +91 98810 12443
                  </span>
                </a>
              </li>

              <li>
                <a href="mailto:wisdomassociatesngp@gmail.com" className="flex gap-3 items-center group">
                  <span className="w-7 h-7 rounded-lg bg-orange-500/15 flex items-center justify-center shrink-0">
                    <FaEnvelope className="text-orange-400 text-xs" />
                  </span>
                  <span className="text-sm text-slate-400 group-hover:text-orange-400 transition-colors break-all">
                    wisdomassociatesngp@gmail.com
                  </span>
                </a>
              </li>

              <li>
                <a href="mailto:dr.suresh@wisdomassociates.com" className="flex gap-3 items-center group">
                  <span className="w-7 h-7 rounded-lg bg-orange-500/15 flex items-center justify-center shrink-0">
                    <FaEnvelope className="text-orange-400 text-xs" />
                  </span>
                  <span className="text-sm text-slate-400 group-hover:text-orange-400 transition-colors break-all">
                    dr.suresh@wisdomassociates.com
                  </span>
                </a>
              </li>
            </ul>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919881012443"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold hover:bg-green-500/20 hover:border-green-500/40 transition-all duration-200"
            >
              <FaWhatsapp className="text-base" />
              Chat on WhatsApp
            </a>
          </div>

        </div>

        {/* ── Stats strip ─────────────────────────────────────────────────── */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {[
            { val: '50+',  label: 'Companies Served' },
            { val: '500+', label: 'Training Programs' },
            { val: '12+',  label: 'Years of Excellence' },
            { val: '35+',  label: 'Training Topics' },
          ].map(({ val, label }) => (
            <div key={label} className="bg-slate-950/80 px-6 py-5 text-center">
              <p className="text-2xl font-extrabold text-orange-400">{val}</p>
              <p className="text-xs text-slate-500 mt-0.5 uppercase tracking-wider font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────────────────────────────── */}
      <div className="relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p className="text-slate-500">
            © {new Date().getFullYear()} Wisdom Associates. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-400 transition">Privacy Policy</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-slate-400 transition">Terms of Use</Link>
            <span>·</span>
            <span className="text-slate-600">Nagpur, India</span>
          </div>
        </div>
      </div>

      {/* ── Blob keyframes ─────────────────────────────────────────────────── */}
      <style>{`
        @keyframes blob1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(60px,40px) scale(1.1); }
          66%      { transform: translate(-30px,60px) scale(0.95); }
        }
        @keyframes blob2 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(-80px,-50px) scale(1.08); }
          66%      { transform: translate(40px,-70px) scale(0.92); }
        }
        @keyframes blob3 {
          0%,100% { transform: translate(-50%,-50%) scale(1); }
          50%      { transform: translate(-50%,-50%) scale(1.2); }
        }
        .animate-blob-1 { animation: blob1 18s ease-in-out infinite; }
        .animate-blob-2 { animation: blob2 22s ease-in-out infinite; }
        .animate-blob-3 { animation: blob3 14s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .footer-blob { animation: none !important; }
        }
      `}</style>
    </footer>
  )
}