import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/hello_/world')({
  component: () => <div>Hello /layout/hello/world!</div>,
})
