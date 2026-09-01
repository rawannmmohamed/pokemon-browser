import { Button } from '@/shared/ui/button'

import type { ViewModeToggleProps } from '../types/component.types'

export function ViewModeToggle({ value, onChange }: ViewModeToggleProps) {
  return (
    <div className="inline-flex gap-2">
      <Button
        size="sm"
        variant={value === 'pagination' ? 'default' : 'outline'}
        onClick={() => onChange('pagination')}
        aria-pressed={value === 'pagination'}
        className="min-w-28 rounded-[4px] border-transparent px-3 text-[11px] font-extrabold shadow-sm"
      >
        Page Controls
      </Button>
      <Button
        size="sm"
        variant={value === 'load-more' ? 'default' : 'outline'}
        onClick={() => onChange('load-more')}
        aria-pressed={value === 'load-more'}
        className="min-w-28 rounded-[4px] border-transparent px-3 text-[11px] font-extrabold shadow-sm"
      >
        Infinite Scroll
      </Button>
    </div>
  )
}
