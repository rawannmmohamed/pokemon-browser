export function getPokemonId(url: string) {
  return url.split('/').filter(Boolean).pop() ?? 'unknown'
}

export function formatPokemonId(id: string) {
  return id === 'unknown' ? '---' : `#${id.padStart(3, '0')}`
}

export function getPokemonSpriteUrl(id: string, variant: 'default' | 'official-artwork' = 'default') {
  if (variant === 'official-artwork') {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  }

  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}

export function dedupePokemon(items: PokemonListItem[]) {
  return Array.from(new Map(items.map((pokemon) => [pokemon.name, pokemon])).values())
}
import type { PokemonListItem } from '@/features/pokemon/types/pokemon.types'
