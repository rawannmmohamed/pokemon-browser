import { POKEMON_PAGE_SIZE } from '@/features/pokemon/constants/pokemon.constants'
import { useInfinitePokemonList } from '@/features/pokemon/hooks/useInfinitePokemonList'
import { usePokemonList } from '@/features/pokemon/hooks/usePokemonList'
import { dedupePokemon } from '@/features/pokemon/utils/pokemon.utils'

import { usePokemonViewModeStore } from '../stores/pokemon-view-mode.store'
import type { PokemonListViewMode } from '../types/component.types'

export function usePokemonListView() {
  const viewMode = usePokemonViewModeStore((state) => state.viewMode)
  const currentPage = usePokemonViewModeStore((state) => state.currentPage)
  const loadedPages = usePokemonViewModeStore((state) => state.loadedPages)
  const setViewMode = usePokemonViewModeStore((state) => state.setViewMode)
  const setCurrentPage = usePokemonViewModeStore((state) => state.setCurrentPage)
  const setLoadedPages = usePokemonViewModeStore((state) => state.setLoadedPages)
  const isRestoringPages = useRef(false)
  const isPaginationMode = viewMode === 'pagination'

  const paginationQuery = usePokemonList(currentPage, POKEMON_PAGE_SIZE, isPaginationMode)
  const infiniteQuery = useInfinitePokemonList(POKEMON_PAGE_SIZE, !isPaginationMode)
  const activeQuery = isPaginationMode ? paginationQuery : infiniteQuery
  const paginatedItems = paginationQuery.data?.results ?? []
  const infiniteItems = infiniteQuery.data?.pages.flatMap((page) => page.results) ?? []
  const items = dedupePokemon(isPaginationMode ? paginatedItems : infiniteItems)
  const totalPages = paginationQuery.data ? Math.ceil(paginationQuery.data.count / POKEMON_PAGE_SIZE) : 0

  useEffect(() => {
    if (isPaginationMode || isRestoringPages.current || (infiniteQuery.data?.pages.length ?? 0) >= loadedPages) return

    let cancelled = false

    async function restoreLoadedPages() {
      isRestoringPages.current = true

      try {
        while (!cancelled && (infiniteQuery.data?.pages.length ?? 0) < loadedPages && infiniteQuery.hasNextPage) {
          await infiniteQuery.fetchNextPage()
        }
      } finally {
        isRestoringPages.current = false
      }
    }

    void restoreLoadedPages()

    return () => {
      cancelled = true
    }
  }, [infiniteQuery, isPaginationMode, loadedPages])

  function handleViewModeChange(nextViewMode: PokemonListViewMode) {
    setViewMode(nextViewMode)
    setCurrentPage(1)
    setLoadedPages(1)
  }

  return {
    activeQuery,
    currentPage,
    hasNextPage: infiniteQuery.hasNextPage,
    isError: activeQuery.isError,
    isInitialLoading: activeQuery.isPending,
    isPaginationMode,
    isFetchingNextPage: infiniteQuery.isFetchingNextPage,
    items,
    loadMore: async () => {
      const result = await infiniteQuery.fetchNextPage()

      if (result.data?.pages.length) {
        setLoadedPages(result.data.pages.length)
      }
    },
    onPageChange: setCurrentPage,
    onRetry: () => activeQuery.refetch(),
    totalPages,
    viewMode,
    onViewModeChange: handleViewModeChange,
  }
}
import { useEffect, useRef } from 'react'
