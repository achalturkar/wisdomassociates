'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/training', label: 'Training' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/ngo', label: 'NGO' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-soft' : 'bg-white/95'}`}>
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="leading-tight">
            <img src="/logo/walogo.png" alt="Wisdom Associates" className="w-auto h-14" />
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map(l => {
            const active = pathname === l.href
            return (
              <li key={l.href}>
                <Link href={l.href} className={`relative px-3 py-2 rounded-full text-sm font-semibold transition ${active ? 'text-white bg-amber-500' : 'text-slate-700 hover:text-slate-900 hover:bg-blue-50'}`}>
                  {l.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <button onClick={() => setOpen(v => !v)} className="lg:hidden w-11 h-11 grid place-items-center rounded-xl bg-slate-100 hover:bg-slate-200" aria-label="Menu">
          {open ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden overflow-hidden bg-white border-t border-slate-100">
            <div className="px-5 py-4 flex flex-col gap-1">
              {links.map(l => (
                <Link key={l.href} href={l.href} className={`px-4 py-3 rounded-xl text-sm font-semibold ${pathname === l.href ? 'bg-orange-400 text-white' : 'text-black hover:bg-orange-100'}`}>{l.label}</Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
