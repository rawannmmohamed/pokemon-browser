import axiosInstance from '@/shared/lib/axios'
import type { PokemonDetails, PokemonListResponse } from '@/features/pokemon/types/pokemon.types'

export const pokemonApi = {
  getPokemonList: async (page = 1, limit = 20, signal?: AbortSignal) => {
    const offset = (page - 1) * limit

    const response = await axiosInstance.get<PokemonListResponse>('/pokemon', {
      params: { limit, offset },
      signal,
    })

    return response.data
  },
  getPokemonDetails: async (id: string | number, signal?: AbortSignal) => {
    const response = await axiosInstance.get<PokemonDetails>(`/pokemon/${id}`, { signal })

    return response.data
  },
}
