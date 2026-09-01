import type { PokemonDetailAbilitiesProps } from '../types/detail-component.types'
import { formatPokemonDetailLabel } from '../utils/pokemon-detail.utils'

export function PokemonDetailAbilities({ abilities }: PokemonDetailAbilitiesProps) {
  const hasAbilities = abilities.length > 0

  return (
    <section className="pokemon-detail-section-motion mt-7 [animation-delay:480ms]">
      <h2 className="text-lg leading-6 font-bold text-slate-950">Abilities</h2>
      <div className="mt-3 space-y-2 text-xs font-normal text-slate-700">
        {hasAbilities ? (
          abilities.map(({ ability, is_hidden }) => (
            <p key={ability.name} className="flex items-center gap-2">
              <span className={is_hidden ? 'rounded-full bg-slate-100 px-2 py-0.5 font-semibold text-slate-900' : 'rounded-full border border-slate-200 bg-white px-2 py-0.5 font-semibold text-slate-900'}>
                {formatPokemonDetailLabel(ability.name)}
              </span>
              {is_hidden ? <span className="text-[11px] font-normal text-slate-500">(Hidden)</span> : null}
            </p>
          ))
        ) : (
          <p className="rounded-[4px] bg-slate-50/80 px-3 py-3 text-xs font-normal text-slate-500">No abilities available.</p>
        )}
      </div>
    </section>
  )
}
