import { QueryProvider } from '@/app/providers/QueryProvider'
import { AppRouter } from '@/app/router'
import { AppErrorBoundary } from '@/shared/components/AppErrorBoundary'

function App() {
  return (
    <AppErrorBoundary>
      <QueryProvider>
        <AppRouter />
      </QueryProvider>
    </AppErrorBoundary>
  )
}

export default App
