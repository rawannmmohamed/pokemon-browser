import { cva } from 'class-variance-authority'

import { cn } from '@/shared/lib/utils'
import type { BadgeProps } from '@/shared/types/ui.types'

const badgeVariants = cva('inline-flex items-center rounded-full px-2 py-0.5 text-xs font-bold', {
  variants: {
    variant: {
      default: 'bg-slate-100 text-slate-700',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge }
