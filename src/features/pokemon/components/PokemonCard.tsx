import { Link } from 'react-router-dom'

import type { PokemonCardProps } from '@/features/pokemon/types/component.types'
import { formatPokemonId, getPokemonId, getPokemonSpriteUrl } from '@/features/pokemon/utils/pokemon.utils'

export function PokemonCard({ pokemon }: PokemonCardProps) {
  const id = getPokemonId(pokemon.url)
  const formattedId = formatPokemonId(id)

  return (
    <Link
      to={`/pokemon/${id}`}
      className="group rounded-2xl bg-white p-3 text-center shadow-sm ring-1 ring-slate-200/70 transition duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
    >
      <div className="grid aspect-[1.35] place-items-center rounded-xl bg-slate-50">
        <img
          src={getPokemonSpriteUrl(id)}
          alt={pokemon.name}
          className="size-32 object-contain drop-shadow-sm transition duration-200 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <p className="mt-3 text-sm font-extrabold capitalize text-slate-900">{pokemon.name}</p>
      <p className="mt-1 text-xs font-bold tracking-wider text-slate-400">{formattedId}</p>
    </Link>
  )
}
