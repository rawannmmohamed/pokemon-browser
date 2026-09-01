import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { pokemonApi } from '@/features/pokemon/api/pokemon.api'
import { POKEMON_PAGE_SIZE } from '@/features/pokemon/constants/pokemon.constants'
import { pokemonQueryKeys } from '@/features/pokemon/constants/queryKeys'

export function usePokemonList(page: number, limit = POKEMON_PAGE_SIZE, enabled = true) {
  return useQuery({
    queryKey: pokemonQueryKeys.list(page, limit),
    queryFn: ({ signal }) => pokemonApi.getPokemonList(page, limit, signal),
    placeholderData: keepPreviousData,
    enabled,
  })
}
