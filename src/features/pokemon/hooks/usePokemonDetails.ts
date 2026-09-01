import { useQuery } from '@tanstack/react-query'

import { pokemonApi } from '@/features/pokemon/api/pokemon.api'
import { pokemonQueryKeys } from '@/features/pokemon/constants/queryKeys'

export function usePokemonDetails(id: string | undefined) {
  return useQuery({
    queryKey: pokemonQueryKeys.detail(id ?? 'unknown'),
    queryFn: ({ signal }) => {
      if (!id) {
        throw new Error('A Pokemon id is required to load details')
      }

      return pokemonApi.getPokemonDetails(id, signal)
    },
    enabled: Boolean(id),
  })
}
