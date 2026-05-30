import './globals.css'
import Providers from './providers'

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
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}