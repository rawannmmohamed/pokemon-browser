import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-50 p-6 text-center">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">404</p>
        <h1 className="mt-2 text-3xl font-extrabold text-slate-900">Page not found</h1>
        <Link className="mt-5 inline-block text-sm font-bold text-slate-700 underline" to="/">Back to Pokedex</Link>
      </div>
    </main>
  )
}
