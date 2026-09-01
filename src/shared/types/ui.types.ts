import type { ButtonHTMLAttributes, HTMLAttributes } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline'
  size?: 'default' | 'sm'
}

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: 'default'
}
