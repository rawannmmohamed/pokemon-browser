import { Inbox } from 'lucide-react'

import type { EmptyStateProps } from '@/shared/types/components.types'

export function EmptyState({ title = 'No Pokemon found', message = 'There are no Pokemon to display right now.' }: EmptyStateProps) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center rounded-[4px] bg-white px-6 py-10 text-center shadow-sm ring-1 ring-slate-200/70">
      <div className="grid size-12 place-items-center rounded-full bg-slate-100 text-slate-500" aria-hidden="true">
        <Inbox size={20} />
      </div>
      <h2 className="mt-4 text-lg font-extrabold text-slate-900">{title}</h2>
      <p className="mt-2 text-sm font-normal leading-6 text-slate-600">{message}</p>
    </div>
  )
}
