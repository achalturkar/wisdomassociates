// 'use client'
// import { useEffect, useRef, useState } from 'react'
// import { motion } from 'framer-motion'

// const stats = [
//   { value: 50, suffix: '+', label: 'Companies Served' },
//   { value: 500, suffix: '+', label: 'Training Programs' },
//   { value: 12, suffix: '+', label: 'Years of Excellence' },
//   { value: 35, suffix: '+', label: 'Training Topics' },
// ]

// function Counter({ target, suffix }) {
//   const [count, setCount] = useState(0)
//   const ref = useRef(null)
//   const started = useRef(false)

//   useEffect(() => {
//     const obs = new IntersectionObserver(([e]) => {
//       if (e.isIntersecting && !started.current) {
//         started.current = true
//         const dur = 1800
//         const step = target / (dur / 16)
//         let cur = 0
//         const timer = setInterval(() => {
//           cur = Math.min(cur + step, target)
//           setCount(Math.floor(cur))
//           if (cur >= target) clearInterval(timer)
//         }, 16)
//       }
//     })
//     if (ref.current) obs.observe(ref.current)
//     return () => obs.disconnect()
//   }, [target])

//   return <span ref={ref}>{count}{suffix}</span>
// }

// export default function Stats() {
//   return (
//     <section className="py-16 bg-gradient-to-r from-orange-500 to-amber-400">
//       <div className="max-w-7xl mx-auto px-5 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
//         {stats.map((s, i) => (
//           <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center text-white">
//             <div className="text-4xl md:text-5xl font-extrabold"><Counter target={s.value} suffix={s.suffix} /></div>
//             <div className="mt-2 text-sm font-semibold text-white/80 uppercase tracking-wider">{s.label}</div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   )
// }

'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const stats = [
  {
    value: 50,
    suffix: '+',
    label: 'Companies Served',
    sublabel: 'Across India',
    icon: '🏢',
    trend: '↑ Growing',
    barPct: 72,
    color: {
      accent:   'bg-orange-600',
      iconBg:   'bg-orange-50',
      iconText: 'text-orange-600',
      trendBg:  'bg-orange-50',
      trendTxt: 'text-orange-700',
      bar:      'bg-orange-500',
    },
  },
  {
    value: 500,
    suffix: '+',
    label: 'Training Programs',
    sublabel: 'Delivered',
    icon: '🎓',
    trend: '↑ Active',
    barPct: 90,
    color: {
      accent:   'bg-blue-600',
      iconBg:   'bg-blue-50',
      iconText: 'text-blue-600',
      trendBg:  'bg-blue-50',
      trendTxt: 'text-blue-700',
      bar:      'bg-blue-500',
    },
  },
  {
    value: 12,
    suffix: '+',
    label: 'Years of Excellence',
    sublabel: 'Since 2012',
    icon: '🏆',
    trend: 'Est. 2012',
    barPct: 88,
    color: {
      accent:   'bg-green-600',
      iconBg:   'bg-green-50',
      iconText: 'text-green-600',
      trendBg:  'bg-green-50',
      trendTxt: 'text-green-700',
      bar:      'bg-green-500',
    },
  },
  {
    value: 35,
    suffix: '+',
    label: 'Training Topics',
    sublabel: 'Specialised',
    icon: '📋',
    trend: '↑ Expanding',
    barPct: 60,
    color: {
      accent:   'bg-amber-500',
      iconBg:   'bg-amber-50',
      iconText: 'text-amber-600',
      trendBg:  'bg-amber-50',
      trendTxt: 'text-amber-700',
      bar:      'bg-amber-500',
    },
  },
]

const footerItems = [
  { icon: '📍', text: 'Nagpur, Maharashtra' },
  { icon: '✅', text: 'ISO-certified methodologies' },
  { icon: '👥', text: 'Pan-India client base' },
]

// ── Animated counter ──────────────────────────────────────────────────────────
function Counter({ target, suffix, active }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    const dur = 1800
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(ease * target))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, target])

  return <>{count}{suffix}</>
}

// ── Progress bar ──────────────────────────────────────────────────────────────
function Bar({ pct, color, active, delay }) {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    if (!active) return
    const t = setTimeout(() => setWidth(pct), delay)
    return () => clearTimeout(t)
  }, [active, pct, delay])

  return (
    <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden mt-3">
      <div
        className={`h-full rounded-full ${color} transition-all duration-[1800ms] ease-out`}
        style={{ width: `${width}%` }}
      />
    </div>
  )
}

// ── Main component ─────────────────────────────────────────────────────────────
export default function Stats() {
  const [active, setActive] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); obs.disconnect() } },
      { threshold: 0.2 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Eyebrow */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 border border-slate-200 rounded-full px-4 py-1.5 bg-slate-50">
            Our impact in numbers
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              {/* Top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-[3px] ${s.color.accent}`} />

              {/* Icon row */}
              <div className="flex items-center justify-between mb-5">
                <div className={`w-10 h-10 rounded-xl ${s.color.iconBg} flex items-center justify-center text-[20px]`}>
                  {s.icon}
                </div>
                <span className={`text-[11px] font-semibold ${s.color.trendBg} ${s.color.trendTxt} px-2.5 py-1 rounded-full`}>
                  {s.trend}
                </span>
              </div>

              {/* Number */}
              <div className="text-[38px] font-extrabold text-slate-900 leading-none tracking-tight tabular-nums">
                <Counter target={s.value} suffix={s.suffix} active={active} />
              </div>

              {/* Label */}
              <div className="mt-2 text-[13px] font-semibold text-slate-700 leading-snug">{s.label}</div>
              <div className="text-[11px] text-slate-400 mt-0.5">{s.sublabel}</div>

              {/* Progress bar */}
              <Bar pct={s.barPct} color={s.color.bar} active={active} delay={300 + i * 80} />
            </motion.div>
          ))}
        </div>

        {/* Footer strip */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {footerItems.map((f) => (
            <div key={f.text} className="flex items-center gap-2 text-[12px] text-slate-500">
              <span>{f.icon}</span>
              {f.text}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}