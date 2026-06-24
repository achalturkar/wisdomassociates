import Link from 'next/link'
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/logo/walogo.png" alt="Wisdom Associates" className="h-12 w-auto" />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">A premium HR consulting, Industrial Safety & Training firm empowering organizations across India.</p>
          <div className="flex gap-3 mt-5">
            {[FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 grid place-items-center rounded-full bg-white/5 hover:bg-orange-500 transition"><Icon /></a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' },
              { label: 'Services', href: '/services' },
              { label: 'Training', href: '/training' },
              { label: 'Gallery', href: '/gallery' },
              { label: 'NGO', href: '/ngo' },
              { label: 'Contact', href: '/contact' },
            ].map(l => (
              <li key={l.label}><Link href={l.href} className="hover:text-white transition">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li>HR Consultancy</li>
            <li>Industrial Relations</li>
            <li>Industrial Safety</li>
            <li>Training & Development</li>
            <li>CSR Consulting</li>
            <li>Operational Excellence</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex gap-3"><FaMapMarkerAlt className="mt-1 text-orange-400 shrink-0" /><span>Nelco Society, Subhash Nagar, Nagpur – 440022, Maharashtra, India</span></li>
            <li className="flex gap-3"><FaPhoneAlt className="mt-1 text-orange-400 shrink-0" /><span>+91 98810 12443</span></li>
            <li className="flex gap-3"><FaEnvelope className="mt-1 text-orange-400 shrink-0" /><span>Wisdomassociatesngp@gmail.com</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Wisdom Associates. All rights reserved.</p>
          <p>Crafted with care · Privacy · Terms</p>
        </div>
      </div>
    </footer>
  )
}
