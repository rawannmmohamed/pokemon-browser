import { pokemonStatLabels } from '../constants/pokemon-detail.constants'

export function formatPokemonDetailLabel(value: string) {
  return pokemonStatLabels[value] ?? value.replace('-', ' ')
}

export function formatPokemonHeight(height: number) {
  return `${(height / 10).toFixed(1)} m`
}

export function formatPokemonWeight(weight: number) {
  return `${(weight / 10).toFixed(1)} kg`
}

export function getPokemonStatWidth(value: number) {
  return `${Math.min((value / 255) * 100, 100)}%`
}
