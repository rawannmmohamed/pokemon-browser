export const pokemonQueryKeys = {
  all: ['pokemon'] as const,
  detail: (id: string) => [...pokemonQueryKeys.all, 'detail', id] as const,
  list: (page: number, limit: number) => [...pokemonQueryKeys.all, 'list', page, limit] as const,
  infiniteList: (limit: number) => [...pokemonQueryKeys.all, 'infinite-list', limit] as const,
}
