import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { pokemonRoutes } from '@/features/pokemon/routes'
import { LoadingState } from '@/shared/components/LoadingState'

const NotFoundPage = lazy(() => import('@/shared/components/NotFoundPage'))

const router = createBrowserRouter([
  ...pokemonRoutes,
  { path: '*', element: <NotFoundPage /> },
])

function RouteFallback() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-50 p-6 text-center">
      <LoadingState message="Loading Pokedex..." />
    </main>
  )
}

export function AppRouter() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
