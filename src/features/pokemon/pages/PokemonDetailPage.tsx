import { ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

import { ErrorState } from '@/shared/components/ErrorState'
import { LoadingState } from '@/shared/components/LoadingState'

import { PokemonDetailAbilities } from '../components/PokemonDetailAbilities'
import { PokemonDetailExperience } from '../components/PokemonDetailExperience'
import { PokemonDetailHeader } from '../components/PokemonDetailHeader'
import { PokemonDetailOverview } from '../components/PokemonDetailOverview'
import { PokemonDetailStats } from '../components/PokemonDetailStats'
import { usePokemonDetails } from '../hooks/usePokemonDetails'
import { getPokemonSpriteUrl } from '../utils/pokemon.utils'

export default function PokemonDetailPage() {
  const { id } = useParams()
  const query = usePokemonDetails(id)

  if (query.isPending) {
    return (
      <main className="grid min-h-screen place-items-center bg-gradient-to-br from-violet-50 via-fuchsia-50 to-pink-50 p-6">
        <LoadingState message="Loading Pokemon details..." />
      </main>
    )
  }

  if (query.isError || !query.data) {
    return (
      <main className="grid min-h-screen place-items-center bg-gradient-to-br from-violet-50 via-fuchsia-50 to-pink-50 p-6">
        <ErrorState onRetry={() => void query.refetch()} isRetrying={query.isFetching} />
      </main>
    )
  }

  const pokemon = query.data
  const artwork = pokemon.sprites.other?.['official-artwork']?.front_default ?? getPokemonSpriteUrl(String(pokemon.id), 'official-artwork')

  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 via-fuchsia-50 to-pink-50 p-6 sm:p-[27px]">
      <div className="mx-auto max-w-[1204px]">
        <Link className="motion-fade-up inline-flex h-[35px] w-32 items-center justify-center gap-2 rounded-[4px] bg-white text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900" to="/">
          <ArrowLeft size={15} aria-hidden="true" />
          Back to List
        </Link>

        <section className="motion-fade-up mx-auto mt-[35px] max-w-[788px] overflow-hidden rounded-[4px] bg-white shadow-sm ring-1 ring-slate-200/70 [animation-delay:80ms]">
          <PokemonDetailHeader pokemon={pokemon} />
          <div className="grid gap-10 p-6 md:grid-cols-[1fr_1.05fr] md:px-8 md:pt-8 md:pb-[22px]">
            <PokemonDetailOverview pokemon={pokemon} artwork={artwork} />
            <div className="md:pt-0.5">
              <PokemonDetailStats stats={pokemon.stats} />
              <PokemonDetailAbilities abilities={pokemon.abilities} />
              <PokemonDetailExperience baseExperience={pokemon.base_experience} />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
