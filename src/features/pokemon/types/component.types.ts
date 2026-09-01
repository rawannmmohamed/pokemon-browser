import type { PokemonListItem } from './pokemon.types'

export type PokemonCardProps = {
  pokemon: PokemonListItem
}

export type PokemonGridProps = {
  items: PokemonListItem[]
  isLoading?: boolean
}
