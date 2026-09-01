import { Zap } from 'lucide-react'

import type { PokemonDetailHeaderProps } from '../types/detail-component.types'
import { formatPokemonId } from '../utils/pokemon.utils'

export function PokemonDetailHeader({ pokemon }: PokemonDetailHeaderProps) {
  return (
    <header className="bg-gradient-to-r px-6 py-[25.5px] text-center text-white" style={{ backgroundImage: 'linear-gradient(90deg, #a943f4 0%, #ec358e 100%)' }}>
      <h1 className="flex items-center justify-center gap-2 text-[26px] leading-8 font-bold capitalize">
        <Zap size={22} strokeWidth={2.5} aria-hidden="true" />
        {pokemon.name}
      </h1>
      <p className="mt-1 text-sm font-normal text-white/80">{formatPokemonId(String(pokemon.id))}</p>
    </header>
  )
}
