import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/site/Navbar'
import Footer from '@/components/site/Footer'
import WhatsAppButton from '@/components/site/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })



export const dynamic = 'force-static'

// export const metadata = {
//   title: 'Wisdom Associates | HR Consulting, Industrial Safety & Training',
//   description: 'Wisdom Associates — Trusted HR consulting, Industrial Safety & Training partner in Nagpur, Maharashtra. Expert consultancy for organizations across India.',
//   keywords: 'HR consulting, industrial safety, training programs, labour law, compliance, Nagpur, Wisdom Associates, CSR',
//   metadataBase: new URL('https://wisdomassociates.com'),
//   openGraph: {
//     title: 'Wisdom Associates | HR, Safety & Training Experts',
//     description: 'Trusted HR consulting, Industrial Safety & Training partner based in Nagpur.',
//     type: 'website',
//     url: 'https://wisdomassociates.com',
//   },
//   robots: { index: true, follow: true },
// }

export const metadata = {
  metadataBase: new URL("https://wisdomassociates.com"),

  title: {
    default: "Wisdom Associates",
    template: "%s | Wisdom Associates",
  },

  description:
    "Wisdom Associates provides HR consultancy, industrial safety solutions, training, compliance management and NGO support services across India.",

  keywords: [
    "HR Consultancy",
    "Industrial Safety",
    "Corporate Training",
    "Compliance",
    "Recruitment",
    "NGO Services",
    "Safety Training",
    "Wisdom Associates"
  ],

  robots: {
    index: true,
    follow: true,
  },

    icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png",
  },


  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://wisdomassociates.com",
    siteName: "Wisdom Associates",
    title: "Wisdom Associates",
    description:
      "HR consultancy, industrial safety solutions and training services.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Wisdom Associates",
    description:
      "HR consultancy, industrial safety solutions and training services.",
  },
};


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
