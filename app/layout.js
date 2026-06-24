import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/site/Navbar'
import Footer from '@/components/site/Footer'
import WhatsAppButton from '@/components/site/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const dynamic = 'force-static'

export const metadata = {
  title: 'Wisdom Associates | HR Consulting, Industrial Safety & Training',
  description: 'Wisdom Associates — Trusted HR consulting, Industrial Safety & Training partner in Nagpur, Maharashtra. Expert consultancy for organizations across India.',
  keywords: 'HR consulting, industrial safety, training programs, labour law, compliance, Nagpur, Wisdom Associates, CSR',
  metadataBase: new URL('https://wisdomassociates.in'),
  openGraph: {
    title: 'Wisdom Associates | HR, Safety & Training Experts',
    description: 'Trusted HR consulting, Industrial Safety & Training partner based in Nagpur.',
    type: 'website',
    url: 'https://wisdomassociates.in',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-slate-900`}>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
