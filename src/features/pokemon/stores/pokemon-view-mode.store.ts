import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import type { PokemonListViewMode } from '../types/component.types'

type PokemonViewModeState = {
  viewMode: PokemonListViewMode
  currentPage: number
  loadedPages: number
  setViewMode: (viewMode: PokemonListViewMode) => void
  setCurrentPage: (currentPage: number) => void
  setLoadedPages: (loadedPages: number) => void
}

export const usePokemonViewModeStore = create<PokemonViewModeState>()(
  persist(
    (set) => ({
      viewMode: 'pagination',
      currentPage: 1,
      loadedPages: 1,
      setViewMode: (viewMode) => set({ viewMode }),
      setCurrentPage: (currentPage) => set({ currentPage }),
      setLoadedPages: (loadedPages) => set({ loadedPages }),
    }),
    {
      name: 'pokemon-view-mode',
    },
  ),
)
