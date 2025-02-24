import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark' | 'midnight' | 'abyss'

export function useThemeMode() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme') as Theme
      if (stored) return stored
    }
    return 'light'
  })

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark', 'midnight', 'abyss')
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return { theme, setTheme }
} 