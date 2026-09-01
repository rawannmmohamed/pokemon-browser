import { useState } from 'react'

import { POKEMON_PAGE_SIZE } from '@/features/pokemon/constants/pokemon.constants'
import { useInfinitePokemonList } from '@/features/pokemon/hooks/useInfinitePokemonList'
import { usePokemonList } from '@/features/pokemon/hooks/usePokemonList'
import { dedupePokemon } from '@/features/pokemon/utils/pokemon.utils'

import type { PokemonListViewMode } from '../types/component.types'

export function usePokemonListView() {
  const [viewMode, setViewMode] = useState<PokemonListViewMode>('pagination')
  const [currentPage, setCurrentPage] = useState(1)
  const isPaginationMode = viewMode === 'pagination'

  const paginationQuery = usePokemonList(currentPage, POKEMON_PAGE_SIZE, isPaginationMode)
  const infiniteQuery = useInfinitePokemonList(POKEMON_PAGE_SIZE, !isPaginationMode)
  const activeQuery = isPaginationMode ? paginationQuery : infiniteQuery
  const paginatedItems = paginationQuery.data?.results ?? []
  const infiniteItems = infiniteQuery.data?.pages.flatMap((page) => page.results) ?? []
  const items = dedupePokemon(isPaginationMode ? paginatedItems : infiniteItems)
  const totalPages = paginationQuery.data ? Math.ceil(paginationQuery.data.count / POKEMON_PAGE_SIZE) : 0

  function handleViewModeChange(nextViewMode: PokemonListViewMode) {
    setViewMode(nextViewMode)
    setCurrentPage(1)
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
    loadMore: () => infiniteQuery.fetchNextPage(),
    onPageChange: setCurrentPage,
    onRetry: () => activeQuery.refetch(),
    totalPages,
    viewMode,
    onViewModeChange: handleViewModeChange,
  }
}
