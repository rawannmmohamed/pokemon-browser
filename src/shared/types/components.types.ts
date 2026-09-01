import type { ReactNode } from 'react'

export type AppErrorBoundaryProps = {
  children: ReactNode
}

export type AppErrorBoundaryState = {
  hasError: boolean
}

export type ErrorStateProps = {
  onRetry: () => void
  isRetrying?: boolean
}

export type LoadingStateProps = {
  message?: string
}

export type EmptyStateProps = {
  title?: string
  message?: string
}
