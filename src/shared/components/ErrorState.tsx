import { RefreshCw } from 'lucide-react'

import type { ErrorStateProps } from '@/shared/types/components.types'
import { Button } from '@/shared/ui/button'

export function ErrorState({ onRetry, isRetrying }: ErrorStateProps) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center rounded-3xl bg-white px-6 py-10 text-center shadow-sm ring-1 ring-slate-200/70">
      <div className="grid size-12 place-items-center rounded-full bg-rose-50 text-rose-500" aria-hidden="true">
        <RefreshCw size={20} />
      </div>
      <h2 className="mt-4 text-lg font-extrabold text-slate-900">Something went wrong</h2>
      <p className="mt-2 text-sm font-normal leading-6 text-slate-600">
        We couldn&apos;t load the Pokemon right now. Please check your connection and try again.
      </p>
      <Button className="mt-5 gap-2" onClick={onRetry} disabled={isRetrying}>
        <RefreshCw size={16} className={isRetrying ? 'animate-spin' : undefined} aria-hidden="true" />
        {isRetrying ? 'Retrying...' : 'Try again'}
      </Button>
    </div>
  )
}
