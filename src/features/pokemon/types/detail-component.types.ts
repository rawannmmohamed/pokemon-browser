import type { ReactNode } from 'react'

import type { PokemonAbilitySlot, PokemonDetails, PokemonStat } from './pokemon.types'

export type PokemonDetailHeaderProps = {
  pokemon: PokemonDetails
}

export type PokemonDetailMetricProps = {
  icon: ReactNode
  label: string
  value: string
}

export type PokemonDetailOverviewProps = {
  pokemon: PokemonDetails
  artwork?: string
}

export type PokemonDetailStatsProps = {
  stats: PokemonStat[]
}

export type PokemonDetailAbilitiesProps = {
  abilities: PokemonAbilitySlot[]
}

export type PokemonDetailExperienceProps = {
  baseExperience?: number | null
}
