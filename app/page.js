import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import WhyChoose from '@/components/home/WhyChoose'
import Stats from '@/components/home/Stats'
import Clients from '@/components/home/Clients'
import Testimonials from '@/components/home/Testimonials'
import Team from '@/components/home/Team'
import CTA from '@/components/home/CTA'
import ContactPreview from '@/components/home/ContactPreview'
import Head from 'next/head'
import FAQ from '@/components/home/FAQ'

export default function HomePage() {
  return (
    <>
    
<Head>
  <title>Wisdom Associates | HR Consultancy, Industrial Safety & Training</title>

  <meta
    name="description"
    content="Wisdom Associates is a trusted HR consultancy and industrial safety partner providing compliance, training and workforce solutions across India."
  />

  <meta
    name="keywords"
    content="HR Consultancy, Industrial Safety, Training, Compliance, Labour Law, Recruitment, Corporate Training, Nagpur"
  />

  <meta name="robots" content="index,follow" />

  <link rel="canonical" href="https://wisdomassociates.com/" />

  <meta property="og:type" content="website" />
  <meta property="og:title" content="Wisdom Associates" />
  <meta property="og:url" content="https://wisdomassociates.com/" />
  <meta
    property="og:description"
    content="HR consultancy, industrial safety solutions and training services."
  />

  <meta name="twitter:card" content="summary_large_image" />
</Head>

      <Hero />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-white border border-orange-300 text-orange-600 text-xs font-bold uppercase tracking-wider">About Wisdom Associates</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">A boutique consultancy with a <span className="gradient-text">big impact</span></h2>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">For over a decade, we've been the trusted partner for organizations across India — delivering HR consultancy, industrial safety solutions, and transformative training programs that drive real results.</p>
        </div>
      </section>
      <Services />
      <WhyChoose />
      <Stats />
      <Clients />
      <Testimonials />
      <Team />
      <FAQ/>
      <CTA />
      <ContactPreview />
    </>
  )
}
