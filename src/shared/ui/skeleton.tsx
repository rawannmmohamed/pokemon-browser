import type { HTMLAttributes } from 'react'

import { cn } from '@/shared/lib/utils'

function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('rounded-[3px] bg-slate-200', className)} {...props} />
}

export { Skeleton }
