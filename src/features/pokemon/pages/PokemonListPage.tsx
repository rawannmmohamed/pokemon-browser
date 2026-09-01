import { LoaderCircle, Zap } from 'lucide-react'

import { ErrorState } from '@/shared/components/ErrorState'
import { Button } from '@/shared/ui/button'

import { PaginationControls } from '../components/PaginationControls'
import { PokemonGrid } from '../components/PokemonGrid'
import { ViewModeToggle } from '../components/ViewModeToggle'
import { usePokemonListView } from '../hooks/usePokemonListView'

export default function PokemonListPage() {
  const pokemonListView = usePokemonListView()
  const {
    activeQuery,
    currentPage,
    hasNextPage,
    isError,
    isFetchingNextPage,
    isInitialLoading,
    isPaginationMode,
    items,
    loadMore,
    onPageChange,
    onRetry,
    onViewModeChange,
    totalPages,
    viewMode,
  } = pokemonListView
  const pageBackground = isPaginationMode
    ? 'bg-gradient-to-br from-indigo-50 via-blue-50 to-slate-100'
    : 'bg-gradient-to-br from-emerald-50 via-green-50 to-cyan-50'

  return (
    <main className={`min-h-screen ${pageBackground} px-4 py-8 sm:px-6 lg:px-8`}>
      <div className="mx-auto max-w-6xl">
        <header className="motion-fade-up mx-auto mb-8 flex max-w-xl flex-col items-center text-center">
          <div className="flex items-center justify-center gap-2 text-2xl font-extrabold tracking-tight text-[#111827]">
            <Zap className="fill-amber-300 text-amber-500" size={25} aria-hidden="true" />
            Pokedex
          </div>
          <p className="mt-2 text-sm font-medium text-[#64748b]">
            Discover and explore Pokemon with {isPaginationMode ? 'page controls' : 'infinite scroll'}
          </p>
          <div className="mt-5">
            <ViewModeToggle value={viewMode} onChange={onViewModeChange} />
          </div>
        </header>

        {isInitialLoading ? <PokemonGrid items={[]} isLoading /> : null}

        {isError ? <ErrorState onRetry={() => void onRetry()} isRetrying={activeQuery.isFetching} /> : null}

        {!isInitialLoading && !isError ? <PokemonGrid items={items} /> : null}

        {!isInitialLoading && !isError && isPaginationMode && totalPages > 1 ? (
          <PaginationControls currentPage={currentPage} totalPages={totalPages} itemsShown={items.length} onPageChange={onPageChange} />
        ) : null}

        {!isInitialLoading && !isError && !isPaginationMode && hasNextPage ? (
          <div className="mt-8 flex flex-col items-center gap-3">
            <Button className="min-w-28 justify-center gap-2 text-center" onClick={() => void loadMore()} disabled={isFetchingNextPage}>
              {isFetchingNextPage ? <LoaderCircle className="animate-spin" size={16} aria-hidden="true" /> : null}
              {isFetchingNextPage ? 'Loading more...' : 'Load More'}
            </Button>
            <p className="text-[11px] font-medium text-[#64748b]">Showing {items.length} Pokemon</p>
          </div>
        ) : null}
      </div>
    </main>
  )
}
