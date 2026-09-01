import { useInfiniteQuery } from '@tanstack/react-query'

import { pokemonApi } from '@/features/pokemon/api/pokemon.api'
import { POKEMON_PAGE_SIZE } from '@/features/pokemon/constants/pokemon.constants'
import { pokemonQueryKeys } from '@/features/pokemon/constants/queryKeys'

export function useInfinitePokemonList(limit = POKEMON_PAGE_SIZE, enabled = true) {
  return useInfiniteQuery({
    queryKey: pokemonQueryKeys.infiniteList(limit),
    initialPageParam: 1,
    queryFn: ({ pageParam, signal }) => pokemonApi.getPokemonList(pageParam, limit, signal),
    getNextPageParam: (lastPage, _allPages, lastPageParam) =>
      lastPage.next ? lastPageParam + 1 : undefined,
    enabled,
  })
}
