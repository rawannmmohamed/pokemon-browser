import type { PokemonGridProps } from '@/features/pokemon/types/component.types'
import { EmptyState } from '@/shared/components/EmptyState'
import { LoadingState } from '@/shared/components/LoadingState'
import { Skeleton } from '@/shared/ui/skeleton'

import { PokemonCard } from './PokemonCard'

export function PokemonGrid({ items, isLoading = false }: PokemonGridProps) {
  if (isLoading) {
    return (
      <div>
        <div className="mb-5">
          <LoadingState />
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 20 }, (_, index) => (
            <div key={index} className="rounded-2xl bg-white p-3 ring-1 ring-slate-200/70">
              <Skeleton className="aspect-[1.35] w-full rounded-xl" />
              <Skeleton className="mx-auto mt-4 h-4 w-2/3" />
              <Skeleton className="mx-auto mt-2 h-3 w-1/3" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    return <EmptyState />
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  )
}
