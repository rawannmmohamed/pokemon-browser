import { Zap } from 'lucide-react'

import { usePokemonList } from '@/features/pokemon/hooks/usePokemonList'
import { ErrorState } from '@/shared/components/ErrorState'

import { PokemonGrid } from '../components/PokemonGrid'

export default function PokemonListPage() {
  const pokemonQuery = usePokemonList(1)

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-sky-50 to-indigo-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto mb-8 max-w-xl text-center">
          <div className="flex items-center justify-center gap-2 text-2xl font-black tracking-tight text-slate-900">
            <Zap className="fill-amber-300 text-amber-500" size={25} aria-hidden="true" />
            Pokedex
          </div>
          <p className="mt-2 text-sm font-medium text-slate-500">Discover and explore Pokemon with React Query</p>
        </header>

        {pokemonQuery.isPending ? <PokemonGrid items={[]} isLoading /> : null}

        {pokemonQuery.isError ? (
          <ErrorState
            onRetry={() => void pokemonQuery.refetch()}
            isRetrying={pokemonQuery.isFetching}
          />
        ) : null}

        {pokemonQuery.data ? <PokemonGrid items={pokemonQuery.data.results} /> : null}
      </div>
    </main>
  )
}
