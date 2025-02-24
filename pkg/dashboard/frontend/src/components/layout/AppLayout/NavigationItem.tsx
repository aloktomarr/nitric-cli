import { cn } from '@/lib/utils'
import React from 'react'

export interface NavigationItemProps {
  name: string
  href: string
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string
      titleId?: string
    } & React.RefAttributes<SVGSVGElement>
  >
  onClick?: () => void
  routePath: string
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  name,
  href,
  icon: Icon,
  onClick,
  routePath,
}) => {
  const isActive = href === routePath

// ... rest of the imports and component code ...

return (
  <li key={name}>
    <a
      href={href}
      onClick={onClick}
      aria-current={isActive}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={cn(
        // Base styles
        'group relative flex h-12 w-12 items-center gap-x-3 rounded-md p-3',
        'text-sm font-semibold leading-6 transition-all',
        'group-data-[state=expanded]:w-full',

        // Light theme
        isActive
          ? 'bg-gray-100 text-primary'
          : [
              'text-gray-400',
              'hover:bg-gray-100 hover:text-primary'
            ],

        // Dark theme
        [
          'dark:text-gray-300',
          'dark:hover:bg-gray-800/50 dark:hover:text-purple-400',
          isActive && 'dark:bg-gray-800/50 dark:text-purple-400'
        ],

        // Midnight theme
        [
          'midnight:text-slate-300',
          'midnight:hover:bg-[#1e1e2e]/50 midnight:hover:text-[#88ccff]',
          isActive && 'midnight:bg-[#1e1e2e]/30 midnight:text-[#88ccff]'
        ],

        // Abyss theme
        [
          'abyss:text-slate-300',
          'abyss:hover:bg-[#1a1a2e]/50 abyss:hover:text-[#4fd1c5]',
          isActive && 'abyss:bg-[#1a1a2e]/30 abyss:text-[#4fd1c5]'
        ]
      )}
    >
      <Icon 
        className={cn(
          // Base styles
          'h-6 w-6 shrink-0',
          
          // Light theme
          isActive 
            ? 'text-primary' 
            : [
                'text-gray-400',
                'group-hover:text-primary'
              ],

          // Dark theme
          [
            'dark:text-gray-300',
            'dark:group-hover:text-purple-400',
            isActive && 'dark:text-purple-400'
          ],

          // Midnight theme
          [
            'midnight:text-slate-300',
            'midnight:group-hover:text-[#88ccff]',
            isActive && 'midnight:text-[#88ccff]'
          ],

          // Abyss theme
          [
            'abyss:text-slate-300',
            'abyss:group-hover:text-[#4fd1c5]',
            isActive && 'abyss:text-[#4fd1c5]'
          ]
        )} 
        aria-hidden="true" 
      />
      <span
        className={cn(
          // Base styles
          'min-w-[120px] text-sm',
          'absolute left-7 group-data-[state=expanded]:left-12',
          'opacity-0 group-data-[state=expanded]:opacity-100',
          'transition-all',

          // Light theme
          isActive 
            ? 'text-primary' 
            : [
                'text-gray-400',
                'group-hover:text-primary'
              ],

          // Dark theme
          [
            'dark:text-gray-300',
            'dark:group-hover:text-purple-400',
            isActive && 'dark:text-purple-400'
          ],

          // Midnight theme
          [
            'midnight:text-slate-300',
            'midnight:group-hover:text-[#88ccff]',
            isActive && 'midnight:text-[#88ccff]'
          ],

          // Abyss theme
          [
            'abyss:text-slate-300',
            'abyss:group-hover:text-[#4fd1c5]',
            isActive && 'abyss:text-[#4fd1c5]'
          ]
        )}
      >
        {name}
      </span>
    </a>
  </li>
)
}

export default NavigationItem
