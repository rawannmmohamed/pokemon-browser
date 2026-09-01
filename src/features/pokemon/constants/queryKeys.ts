export const pokemonQueryKeys = {
  all: ['pokemon'] as const,
  detail: (id: string) => [...pokemonQueryKeys.all, 'detail', id] as const,
  list: (page: number) => [...pokemonQueryKeys.all, 'list', page] as const,
}
