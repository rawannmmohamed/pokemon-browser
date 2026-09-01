import { Ruler, Weight } from 'lucide-react'

import { Badge } from '@/shared/ui/badge'

import { pokemonTypeColors } from '../constants/pokemon-detail.constants'
import type { PokemonDetailMetricProps, PokemonDetailOverviewProps } from '../types/detail-component.types'
import { formatPokemonHeight, formatPokemonWeight } from '../utils/pokemon-detail.utils'

function PokemonDetailMetric({ icon, label, value }: PokemonDetailMetricProps) {
  return (
    <div className="rounded-[4px] bg-slate-50/80 px-3 py-4 text-center">
      <div className="flex items-center justify-center gap-2 text-xs font-normal text-slate-600">
        <span className="text-slate-500">{icon}</span>
        <span>{label}</span>
      </div>
      <p className="mt-2 text-lg font-bold leading-none text-slate-950">{value}</p>
    </div>
  )
}

export function PokemonDetailOverview({ pokemon, artwork }: PokemonDetailOverviewProps) {
  return (
    <div className="flex min-w-0 flex-col items-center md:-mt-1 md:translate-x-[5px]">
      <div className="grid size-64 place-items-center rounded-full bg-slate-50 sm:size-[280px]">
        <img src={artwork} alt={pokemon.name} className="pokemon-detail-image-motion size-60 object-contain sm:size-[268px]" />
      </div>
      <div className="mt-[22px] flex flex-wrap justify-center gap-2">
        {pokemon.types.map(({ type }) => (
          <Badge key={type.name} className={pokemonTypeColors[type.name] ?? 'bg-slate-500 text-white'}>
            {type.name}
          </Badge>
        ))}
      </div>
      <div className="mt-4 grid w-full max-w-sm grid-cols-2 gap-3 md:w-[370px] md:max-w-none md:-translate-x-[13px]">
        <PokemonDetailMetric icon={<Ruler className="mx-auto" size={15} aria-hidden="true" />} label="Height" value={formatPokemonHeight(pokemon.height)} />
        <PokemonDetailMetric icon={<Weight className="mx-auto" size={15} aria-hidden="true" />} label="Weight" value={formatPokemonWeight(pokemon.weight)} />
      </div>
    </div>
  )
}
