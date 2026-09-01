import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from '@/shared/ui/button'

import type { PaginationControlsProps } from '../types/component.types'

function getVisiblePages(currentPage: number, totalPages: number) {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, index) => index + 1)
  if (currentPage <= 4) return [1, 2, 3, 4, 5, 'ellipsis', totalPages] as const
  if (currentPage >= totalPages - 3) return [1, 'ellipsis', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages] as const

  return [1, 'ellipsis', currentPage - 1, currentPage, currentPage + 1, 'ellipsis', totalPages] as const
}

export function PaginationControls({ currentPage, totalPages, itemsShown, onPageChange }: PaginationControlsProps) {
  const visiblePages = getVisiblePages(currentPage, totalPages)

  return (
    <div className="mt-8 flex flex-col items-center gap-3">
      <nav className="flex flex-wrap items-center justify-center gap-1.5" aria-label="Pokemon pages">
      <Button className="min-w-20 justify-center gap-1 rounded-[4px] border-transparent bg-white px-2 text-center text-[11px] font-medium text-[#64748b] shadow-sm" size="sm" variant="outline" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} aria-label="Previous page">
        <ChevronLeft size={15} aria-hidden="true" />
        <span className="hidden sm:inline">Previous</span>
      </Button>
      {visiblePages.map((page, index) =>
        page === 'ellipsis' ? (
          <span key={`ellipsis-${index}`} className="px-0.5 text-[11px] font-medium text-[#64748b]" aria-hidden="true">...</span>
        ) : (
          <Button key={page} className="min-w-8 rounded-[4px] px-0 text-[11px] font-bold shadow-sm" size="sm" variant={page === currentPage ? 'default' : 'outline'} onClick={() => onPageChange(page)} aria-label={`Go to page ${page}`} aria-current={page === currentPage ? 'page' : undefined}>
            {page}
          </Button>
        ),
      )}
      <Button className="min-w-16 justify-center gap-1 rounded-[4px] border-transparent bg-white px-2 text-center text-[11px] font-medium text-[#64748b] shadow-sm" size="sm" variant="outline" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} aria-label="Next page">
        <span className="hidden sm:inline">Next</span>
        <ChevronRight size={15} aria-hidden="true" />
      </Button>
      </nav>
      <p className="text-[11px] font-medium text-[#64748b]">
        Page {currentPage} of {totalPages} ({itemsShown} Pokemon shown)
      </p>
    </div>
  )
}
