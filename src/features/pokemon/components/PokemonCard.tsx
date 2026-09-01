import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LoaderCircle } from 'lucide-react'

import type { PokemonCardImageProps, PokemonCardProps } from '@/features/pokemon/types/component.types'
import { formatPokemonId, getPokemonId, getPokemonSpriteUrl } from '@/features/pokemon/utils/pokemon.utils'

function PokemonCardImage({ id, name }: PokemonCardImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  return (
    <div className="relative grid h-28 place-items-center overflow-hidden rounded-[3px] bg-slate-50 sm:h-32" aria-busy={isLoading}>
      {isLoading ? (
        <div className="absolute inset-3 grid place-items-center rounded-[3px] bg-slate-100 text-slate-400">
          <LoaderCircle className="animate-spin" size={20} aria-hidden="true" />
          <span className="sr-only">Loading {name} image</span>
        </div>
      ) : null}
      {hasError ? (
        <span className="px-3 text-[11px] font-medium text-slate-500">Image unavailable</span>
      ) : (
        <img
          src={getPokemonSpriteUrl(id, 'official-artwork')}
          alt={name}
          className={`size-28 object-contain drop-shadow-sm sm:size-32 ${isLoading ? 'invisible' : 'visible'}`}
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false)
            setHasError(true)
          }}
        />
      )}
    </div>
  )
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  const id = getPokemonId(pokemon.url)
  const formattedId = formatPokemonId(id)

  return (
    <Link
      to={`/pokemon/${id}`}
      className="motion-card group block rounded-[4px] bg-white p-3 text-center shadow-sm ring-1 ring-slate-200/70 hover:-translate-y-1 hover:bg-[#f8fafc] hover:shadow-lg hover:ring-slate-300 active:translate-y-0 active:bg-slate-100 active:shadow-inner active:ring-slate-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
    >
      <PokemonCardImage id={id} name={pokemon.name} />
      <p className="mt-3 text-[13px] font-extrabold capitalize text-[#111827]">{pokemon.name}</p>
      <p className="mt-1 text-[10px] font-medium tracking-wide text-[#64748b]">{formattedId}</p>
    </Link>
  )
}
