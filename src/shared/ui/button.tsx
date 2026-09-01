import { cva } from 'class-variance-authority'

import { cn } from '@/shared/lib/utils'
import type { ButtonProps } from '@/shared/types/ui.types'

const buttonVariants = cva(
  'inline-flex cursor-pointer items-center justify-center rounded-[4px] text-center text-sm font-bold leading-none transition-[background-color,border-color,box-shadow,transform] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-50 disabled:transition-none',
  {
    variants: {
      variant: {
        default: 'bg-[#111827] text-white hover:bg-[#1f2937] active:bg-[#0f172a] focus-visible:outline-[#111827]',
        outline: 'border border-[#e2e8f0] bg-white text-[#475569] hover:border-[#cbd5e1] hover:bg-[#f8fafc] active:bg-[#f1f5f9] focus-visible:outline-[#64748b]',
      },
      size: {
        default: 'h-9 px-4',
        sm: 'h-8 px-3 text-xs',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
}

export { Button }
