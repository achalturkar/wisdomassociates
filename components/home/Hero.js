'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowRight, FaCheckCircle, FaStar } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-100 via-blue-50 to-green-100">
      <div className="absolute inset-0 hero-grid-pattern opacity-60"></div>
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange-300/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-32 w-[500px] h-[500px] bg-green-300/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-12 lg:pt-20 pb-24 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-orange-200 text-orange-700 text-xs font-bold shadow-soft">
            <HiSparkles className="text-amber-500" /> Nagpur's Trusted HR & Safety Partner since 2012
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-blue-400">
            Empowering <br className="hidden sm:block" />
            <span className="gradient-text">People & Organizations</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
            Wisdom Associates is a premier HR, Industrial Safety & Training consultancy firm helping organizations build compliant, safe, and people-centric workplaces.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-blue-500 to-green-400 text-white font-bold shadow-glow hover:shadow-2xl hover:scale-[1.03] transition-all">
              Book Free Consultation <FaArrowRight className="group-hover:translate-x-1 transition" />
            </Link>
            <Link href="/services" className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-white border border-slate-200 hover:border-orange-300 font-semibold text-slate-800 shadow-soft">
              Explore Services
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
            <div className="flex items-center gap-2 text-slate-700"><FaCheckCircle className="text-emerald-500" /> 50+ Companies Served</div>
            <div className="flex items-center gap-2 text-slate-700"><FaCheckCircle className="text-emerald-500" /> 500+ Training Programs</div>
            <div className="flex items-center gap-2 text-slate-700"><FaCheckCircle className="text-emerald-500" /> Pan-India Reach</div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-glow border border-white">
            <img src="/images/hero-girls.jpg" alt="HR consulting" className="w-full h-[460px] lg:h-[520px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/30 via-transparent to-transparent"></div>
          </div>

          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -left-6 top-12 bg-white rounded-2xl p-4 shadow-glow w-56 hidden md:block">
            <div className="flex items-center gap-2 text-amber-500 mb-1">
              {Array.from({ length: 5 }).map((_, i) => <FaStar key={i} className="text-sm" />)}
            </div>
            <div className="text-sm font-bold">Trusted by Industry Leaders</div>
            <div className="text-xs text-slate-500">50+ companies across India</div>
          </motion.div>

          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute -right-4 bottom-10 bg-slate-900 text-white rounded-2xl p-4 shadow-glow w-60 hidden md:block">
            <div className="text-xs uppercase tracking-wider text-orange-300 font-bold">Training Programs</div>
            <div className="mt-1 text-3xl font-extrabold">500+ <span className="text-base font-medium text-slate-300">delivered</span></div>
            <div className="text-xs text-slate-400">Across manufacturing, BFSI & more</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
