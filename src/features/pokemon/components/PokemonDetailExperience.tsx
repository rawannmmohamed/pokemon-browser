import type { PokemonDetailExperienceProps } from '../types/detail-component.types'

export function PokemonDetailExperience({ baseExperience }: PokemonDetailExperienceProps) {
  const hasBaseExperience = typeof baseExperience === 'number'

  return (
    <section className="pokemon-detail-section-motion mt-6 [animation-delay:560ms]">
      <h2 className="text-lg leading-6 font-bold text-slate-950">Base Experience</h2>
      <p className={`mt-1 ${hasBaseExperience ? 'text-2xl leading-7 font-bold text-violet-600' : 'rounded-[4px] bg-slate-50/80 px-3 py-3 text-xs font-normal text-slate-500'}`}>
        {hasBaseExperience ? `${baseExperience} XP` : 'No base experience available.'}
      </p>
    </section>
  )
}
