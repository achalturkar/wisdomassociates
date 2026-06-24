'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── FAQ data derived from Wisdom Associates document ─────────────────────────
const FAQ_CATEGORIES = [
  {
    label: 'General',
    icon: '💼',
    items: [
      {
        q: 'What is Wisdom Associates and what do you do?',
        a: 'Wisdom Associates is a Nagpur-based HR, Industrial Safety, and Training consultancy firm. We partner with organisations to build compliant, safe, and people-centric workplaces. Our services span HR consultancy, industrial relations, corporate social responsibility, safety audits, training programs, and operational excellence systems.',
      },
      {
        q: 'Where is Wisdom Associates located?',
        a: 'Our head office is at Nelco Society, Subhash Nagar, Nagpur – 440022, Maharashtra, India. We serve clients pan-India, including industries in Nagpur, Pune, Bathinda, Ballarpur, and other locations.',
      },
      {
        q: 'Who leads Wisdom Associates?',
        a: 'Wisdom Associates is led by Founder Directors Dr. Suresh Pandilwar and Sharayu Pandilwar, supported by a specialist team including Hemant Suradkar, Bharat Gupta, Prashant Kathale, Dr. Renuka Mainde, and Shipra Dikshit.',
      },
      {
        q: 'Which industries and companies have you worked with?',
        a: 'We have worked with 50+ companies across manufacturing, power, textiles, aerospace, automotive, and more — including Mahindra & Mahindra, Tata Advanced Systems, Dassault Reliance Aerospace, Vedanta Power (TSPL), Power Grid Corporation of India, Videocon Industries, Bharat Containers, and many MIDC-based industries in Nagpur.',
      },
    ],
  },
  {
    label: 'Training',
    icon: '🎓',
    items: [
      {
        q: 'What training programs does Wisdom Associates offer?',
        a: 'We offer a wide range of training solutions: Leadership & Supervisory Development, Workforce Capability Building, Compliance & Ethics Training, and fully Customised Training Modules for senior management, middle managers, and frontline staff. We have delivered 500+ programs to date.',
      },
      {
        q: 'What specific training topics do you cover?',
        a: 'Our catalogue of 35+ topics includes Work Ethics & Culture, Change Management, Time Management, Team Building & Leadership, Effective Communication, HR Policies & Execution, Behavioural Based Safety, POSH (Prevention of Sexual Harassment), Stress Management, Decision Making, Discipline & Disciplinary Action, Conflict Resolution, Presentation Skills, TPM Awareness, and many more.',
      },
      {
        q: 'Can training be customised for our organisation?',
        a: 'Yes. We design and deliver customised training modules tailored to your industry, workforce level (senior management, middle managers, or shopfloor staff), and specific organisational challenges. We work closely with your HR team to align content with your goals.',
      },
      {
        q: 'Do you conduct on-site training at client facilities?',
        a: 'Absolutely. We conduct training programs at client sites across India. Our team has delivered programs at factories, power plants, manufacturing units, and corporate offices in Nagpur, Pune, Bathinda, Ballarpur, Warora, and other locations.',
      },
    ],
  },
  {
    label: 'Consultancy',
    icon: '📋',
    items: [
      {
        q: 'What HR consultancy services do you provide?',
        a: 'Our HR consultancy covers HR policy design and implementation, performance management systems, talent acquisition strategies, and employee engagement initiatives. We help organisations build structured, compliant, and people-friendly HR frameworks.',
      },
      {
        q: 'Do you handle Industrial Relations and Labour Law compliance?',
        a: 'Yes. We provide comprehensive Industrial Relations & Compliance services including labour law advisory, grievance handling, dispute resolution, and union–management relations. Our consultants ensure your organisation stays compliant with applicable statutes.',
      },
      {
        q: 'What does your CSR consultancy include?',
        a: 'Our CSR consultancy covers policy design, project identification and monitoring, sustainability initiatives, and stakeholder reporting. We help companies meet their CSR obligations under the Companies Act while creating meaningful community impact.',
      },
      {
        q: 'Do you assist with Operational Excellence and quality systems?',
        a: 'Yes. We support Total Productive Maintenance (TPM) implementation, Quality Management Systems (ISO 9001 certification support), and Continuous Improvement programs including Kaizen, Lean, and Six Sigma methodologies.',
      },
    ],
  },
  {
    label: 'Safety',
    icon: '🛡️',
    items: [
      {
        q: 'What industrial safety services do you offer?',
        a: 'We provide comprehensive Industrial Safety Consultancy including workplace safety audits, risk assessments, hazard mitigation planning, emergency preparedness programs, and ongoing compliance advisory to keep your workforce safe and legally compliant.',
      },
      {
        q: 'Do you conduct safety audits and support certifications?',
        a: 'Yes. We carry out thorough workplace safety audits with gap analysis and corrective action planning. We also provide certification support for ISO 45001 (Occupational Health & Safety Management Systems) and establish monitoring and reporting mechanisms.',
      },
      {
        q: 'Do you offer Behavioural Based Safety (BBS) training?',
        a: 'Yes. Behavioural Based Safety is one of our core training topics. We help organisations move beyond compliance by building a proactive safety culture where employees understand and own their role in preventing incidents.',
      },
    ],
  },
]

// ─── Single accordion item ─────────────────────────────────────────────────────
function AccordionItem({ item, index, isOpen, onToggle }) {
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all duration-200
        ${isOpen
          ? 'border-orange-300 shadow-sm shadow-orange-100'
          : 'border-slate-100 hover:border-slate-200'}`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-start gap-4 px-5 py-4 text-left bg-white hover:bg-orange-50/40 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-inset"
      >
        {/* Number badge */}
        <span className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold mt-0.5 transition-colors
          ${isOpen ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
          {index + 1}
        </span>

        <span className={`flex-1 text-[14px] font-semibold leading-snug transition-colors
          ${isOpen ? 'text-orange-600' : 'text-slate-800'}`}>
          {item.q}
        </span>

        {/* Chevron */}
        <span className={`shrink-0 mt-0.5 text-slate-400 text-lg leading-none transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 ml-10 text-[13.5px] text-slate-600 leading-relaxed border-t border-slate-50">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Main FAQ component ────────────────────────────────────────────────────────
export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [openIndex, setOpenIndex] = useState(null)

  const handleCategoryChange = (i) => {
    setActiveCategory(i)
    setOpenIndex(null)
  }

  const handleToggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  const currentItems = FAQ_CATEGORIES[activeCategory].items

  return (
    <section className="py-10 bg-gradient-to-b from-white to-orange-50/40">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">

        {/* ── Section header ── */}
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-white border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-widest shadow-sm mb-4">
            FAQs
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          {/* <p className="mt-3 text-slate-500 text-base max-w-xl mx-auto">
            Everything you need to know about our services. Can't find your answer?{' '}
            <a href="/contact" className="text-orange-600 font-semibold hover:underline">
              Contact us.
            </a>
          </p> */}
        </div>

        {/* ── Category tabs ── */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FAQ_CATEGORIES.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => handleCategoryChange(i)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border
                ${activeCategory === i
                  ? 'bg-orange-500 border-orange-500 text-white shadow-md shadow-orange-200'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-orange-200 hover:text-orange-600'}`}
            >
              <span>{cat.icon}</span>
              {cat.label}
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full
                ${activeCategory === i ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
                {cat.items.length}
              </span>
            </button>
          ))}
        </div>

        {/* ── Accordion ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
            className="flex flex-col gap-2.5"
          >
            {currentItems.map((item, i) => (
              <AccordionItem
                key={item.q}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom CTA strip ── */}
        {/* <div className="mt-12 rounded-2xl bg-white border border-orange-100 p-7 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-sm">
          <div>
            <p className="text-[15px] font-bold text-slate-900">Still have questions?</p>
            <p className="text-sm text-slate-500 mt-0.5">Our team is ready to help — reach out any time.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="tel:+919881012443"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
            >
              📞 Call Us
            </a>
            <a
              href="https://wa.me/919881012443"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 text-white text-sm font-semibold hover:shadow-md hover:shadow-orange-200 transition"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div> */}

      </div>
    </section>
  )
}