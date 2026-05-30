'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const current = theme === 'system' ? resolvedTheme : theme

  return (
    <button
      onClick={() =>
        setTheme(current === 'dark' ? 'light' : 'dark')
      }
      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
    >
      {current === 'dark' ? '🌙' : '☀️'}
    </button>
  )
}