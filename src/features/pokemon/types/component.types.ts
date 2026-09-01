import type { PokemonListItem } from './pokemon.types'

export type PokemonCardProps = {
  pokemon: PokemonListItem
}

export type PokemonCardImageProps = {
  id: string
  name: string
}

export type PokemonGridProps = {
  items: PokemonListItem[]
  isLoading?: boolean
}

export type PokemonListViewMode = 'pagination' | 'load-more'

export type ViewModeToggleProps = {
  value: PokemonListViewMode
  onChange: (value: PokemonListViewMode) => void
}

export type PaginationControlsProps = {
  currentPage: number
  totalPages: number
  itemsShown: number
  onPageChange: (page: number) => void
}
