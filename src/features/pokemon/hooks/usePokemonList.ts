import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { pokemonApi } from '@/features/pokemon/api/pokemon.api'
import { pokemonQueryKeys } from '@/features/pokemon/constants/queryKeys'

const DEFAULT_PAGE_SIZE = 20

export function usePokemonList(page: number, limit = DEFAULT_PAGE_SIZE) {
  return useQuery({
    queryKey: pokemonQueryKeys.list(page, limit),
    queryFn: ({ signal }) => pokemonApi.getPokemonList(page, limit, signal),
    placeholderData: keepPreviousData,
  })
}
