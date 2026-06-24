// 'use client'
// import Link from 'next/link'
// import { motion } from 'framer-motion'
// import { FaArrowRight, FaPhoneAlt } from 'react-icons/fa'

// export default function CTA() {
//   return (
//     <section className="py-20 ">
//       <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
//         <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
//           className="relative rounded-[32px] overflow-hidden bg-gradient-to-l from-orange-200 to-green-100 p-10 md:p-16 shadow-glow"
//         >

//          <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-6">Let's Work Together</span>
//           <h2 className="text-3xl md:text-5xl font-extrabold text-green-700 leading-tight">
//             Ready to build a <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">stronger organization?</span>
//           </h2>
//           <p className="mt-5 text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
//             Connect with our experts for a free consultation on HR, Industrial Safety, or Training & Development.
//           </p>
//           <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
//             <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-green-400 text-white font-bold hover:scale-[1.03] transition shadow-glow">
//               Book Free Consultation <FaArrowRight />
//             </Link>
//             <a href="tel:+919881012443" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 font-semibold transition">
//               <FaPhoneAlt /> +91 98810 12443
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
// 'use client'
// import Link from 'next/link'
// import { motion } from 'framer-motion'
// import { FaArrowRight, FaWhatsapp } from 'react-icons/fa'

// export default function CTA() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-5 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="relative rounded-[32px] overflow-hidden bg-gradient-to-l from-orange-200 to-green-100 p-10 md:p-16 shadow-glow"
//         >
//           <div className="absolute inset-0 opacity-50">
//             <img src="/images/cta.jpg" alt="" className="w-full h-full object-cover" />
//             <div className="absolute inset-0 gradient-bg opacity-80"></div>
//           </div>
//           <div className="relative grid md:grid-cols-2 gap-10 items-center">
//             <div className="text-white">
//               <h2 className="text-3xl md:text-5xl font-extrabold text-blue-600 leading-tight">
//                Ready to build a <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-300">stronger organization?</span>
//               </h2>
//               <p className="mt-5 text-slate-800 text-lg max-w-2xl mx-auto leading-relaxed">
//                 Connect with our experts for a free consultation on HR, Industrial Safety, or Training & Development.           </p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
//               <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-blue-700 font-bold shadow-2xl hover:scale-[1.03] transition">
//                 Book a Free Call <FaArrowRight />
//               </Link>
//               <a href="https://wa.me/919881012443" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold transition">
//                 <FaWhatsapp className="text-xl" /> WhatsApp Us
//               </a>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa'

export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[32px] overflow-hidden p-10 md:p-16 shadow-glow"
        >
          {/* BG: handshake image preserved */}
          <div className="absolute inset-0">
            <img src="/images/cta.jpg" alt="" className="w-full h-full object-cover" />
            {/* Multi-stop overlay: deep blue-left, green-right, keeps image visible in center */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(120deg, rgba(10,35,100,0.92) 0%, rgba(11,58,138,0.82) 30%, rgba(10,80,55,0.72) 65%, rgba(5,110,60,0.88) 100%)',
              }}
            />
            {/* Orange glow streak near top for logo-color accent */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 55% 35% at 50% -10%, rgba(249,115,22,0.30) 0%, transparent 70%)',
              }}
            />
          </div>

          {/* Decorative blobs */}
          <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-orange-400/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-green-500/20 blur-3xl pointer-events-none" />

          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right,rgba(255,255,255,0.18) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.18) 1px,transparent 1px)',
              backgroundSize: '52px 52px',
            }}
          />

          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            {/* ── LEFT: text ── */}
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-orange-400/20 border border-orange-400/40 text-orange-300 text-xs font-bold uppercase tracking-widest mb-5">
                Let's Work Together
              </span>

              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                Ready to build a{' '}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      'linear-gradient(90deg, #fb923c 0%, #fbbf24 50%, #4ade80 100%)',
                  }}
                >
                  stronger organization?
                </span>
              </h2>

              {/* <p className="mt-5 text-blue-100 text-base md:text-lg leading-relaxed max-w-lg">
                Connect with our experts for a free consultation on HR, Industrial Safety, or Training &amp; Development.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {['12+ Years Experience', 'Pan-India Reach', 'Free Consultation'].map(badge => (
                  <span
                    key={badge}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                    {badge}
                  </span>
                ))}
              </div> */}
            </div>

            {/* ── RIGHT: buttons ── */}
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 md:justify-end">
              {/* Primary — orange gradient */}
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-bold text-sm text-white transition-all hover:scale-[1.04] active:scale-[0.97]"
                style={{
                  background:
                    'linear-gradient(135deg, #ea580c 0%, #f97316 45%, #fbbf24 100%)',
                  boxShadow: '0 8px 32px rgba(249,115,22,0.55)',
                }}
              >
                Book a Free Consultation
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary — glass green */}
              <a
                href="https://wa.me/919881012443"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-bold text-sm text-white border-2 transition-all hover:scale-[1.04] active:scale-[0.97] hover:bg-green-500/25 backdrop-blur-sm"
                style={{
                  borderColor: 'rgba(74,222,128,0.65)',
                  background: 'rgba(255,255,255,0.07)',
                }}
              >
                <FaWhatsapp className="text-green-400 text-xl" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}