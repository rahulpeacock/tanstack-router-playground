import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/first')({
  component: () => <div>Hello /layout/first!</div>,
})
