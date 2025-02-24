'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useThemeMode , type Theme} from '@/hooks/useThemeMode'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const { theme, setTheme } = useThemeMode()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          {theme === 'light' ? (
            <MoonIcon className="h-5 w-5" />
          ) : (
            <SunIcon className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {[
          { id: 'light', label: 'Light' },
          { id: 'dark', label: 'Dark' },
          { id: 'midnight', label: 'Midnight' },
          { id: 'abyss', label: 'Abyss' }
        ].map((item) => (
          <DropdownMenuItem 
            key={item.id}
            onClick={() => setTheme(item.id as Theme)}
            className={cn(
              'flex items-center justify-between',
              'cursor-pointer', 
              theme === item.id && item.id === 'dark' 
                ? 'bg-purple-500/10 text-purple-400'
                : theme === item.id && 'bg-primary/10 text-primary'
            )}
          >
            {item.label}
          
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 