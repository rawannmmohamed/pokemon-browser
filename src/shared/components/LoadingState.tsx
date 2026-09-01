import { LoaderCircle } from 'lucide-react'

import type { LoadingStateProps } from '@/shared/types/components.types'

export function LoadingState({ message = 'Loading Pokemon...' }: LoadingStateProps) {
  return (
    <div role="status" aria-live="polite" className="flex items-center justify-center gap-2 text-sm font-medium text-slate-600">
      <LoaderCircle className="animate-spin text-amber-500" size={18} aria-hidden="true" />
      {message}
    </div>
  )
}
