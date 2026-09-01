import type { PokemonDetailStatsProps } from '../types/detail-component.types'
import { formatPokemonDetailLabel, getPokemonStatWidth } from '../utils/pokemon-detail.utils'

export function PokemonDetailStats({ stats }: PokemonDetailStatsProps) {
  return (
    <section className="pokemon-detail-section-motion [animation-delay:160ms]">
      <h2 className="text-lg leading-6 font-bold text-slate-950">Base Stats</h2>
      <div className="mt-3 space-y-[7px]">
        {stats.map(({ base_stat, stat }, index) => (
          <div key={stat.name} className="pokemon-stat-row-motion" style={{ animationDelay: `${220 + index * 65}ms` }}>
            <div className="flex items-center justify-between text-[13px] font-normal text-slate-700">
              <span className="capitalize">{formatPokemonDetailLabel(stat.name)}</span>
              <span>{base_stat}</span>
            </div>
            <div className="mt-1 h-[7px] rounded-full bg-slate-100">
              <div className="pokemon-stat-fill-motion h-full rounded-full bg-slate-950" style={{ width: getPokemonStatWidth(base_stat), animationDelay: `${300 + index * 65}ms` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
