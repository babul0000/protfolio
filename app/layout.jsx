import './globals.css'

export const metadata = {
  title: 'Babul Hossan — Full Stack Developer',
  description:
    'Building smart & scalable web solutions. Full-stack developer specializing in React, Next.js, and modern web technologies.',

  keywords: [
    'developer',
    'portfolio',
    'full stack developer',
    'react',
    'next.js',
    'web development',
  ],

  authors: [{ name: 'Babul Hossan' }],
  creator: 'Babul Hossan',

  // তোমার লাইভ লিঙ্কের সাথে মেটাডেটা বেস যুক্ত করা হলো
  metadataBase: new URL(
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://babul-hossan-portfolio.vercel.app'
  ),

  openGraph: {
    title: 'Babul Hossan — Full Stack Developer',
    description:
      'Building smart & scalable web solutions. Full-stack developer specializing in React, Next.js, and modern web technologies.',

    url:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : 'https://babul-hossan-portfolio.vercel.app',

    siteName: 'Babul Hossan Portfolio',
    type: 'website',
    locale: 'en_US',

    // সোশ্যাল মিডিয়াতে ইমেজের সাইজ ১২০০x৬৩০ ডিক্লেয়ার করা হলো যেন বড় কার্ড দেখায়
    images: [
      {
        url: '/my.png',
        width: 1200,
        height: 630,
        alt: 'Babul Hossan Portfolio Preview',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image', // টুইটার বা এক্স-এ ইমেজ বড় দেখানোর জন্য
    title: 'Babul Hossan — Full Stack Developer',
    description:
      'Building smart & scalable web solutions. Full-stack developer specializing in React, Next.js, and modern web technologies.',

    images: ['/my.png'],
  },

  // ব্রাউজার ট্যাব ও বুকমার্ক লোগো
  icons: {
    icon: '/my.png',
    shortcut: '/my.png',
    apple: '/my.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="noise antialiased bg-black text-white">
        {children}
      </body>
    </html>
  )
}