import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(layout-two)/second')({
  component: () => <div>Hello /(layout-two)/second!</div>,
})
