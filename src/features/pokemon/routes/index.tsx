import { createElement, lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

const pokemonListPage = lazy(() => import('@/features/pokemon/pages/PokemonListPage'))
const pokemonDetailPage = lazy(() => import('@/features/pokemon/pages/PokemonDetailPage'))

export const pokemonRoutes: RouteObject[] = [
  { path: '/', element: createElement(pokemonListPage) },
  { path: '/pokemon/:id', element: createElement(pokemonDetailPage) },
]
