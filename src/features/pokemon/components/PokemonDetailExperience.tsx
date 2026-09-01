import type { PokemonDetailExperienceProps } from '../types/detail-component.types'

export function PokemonDetailExperience({ baseExperience }: PokemonDetailExperienceProps) {
  return (
    <section className="pokemon-detail-section-motion mt-6 [animation-delay:560ms]">
      <h2 className="text-lg leading-6 font-bold text-slate-950">Base Experience</h2>
      <p className="mt-1 text-2xl leading-7 font-bold text-violet-600">{baseExperience} XP</p>
    </section>
  )
}
