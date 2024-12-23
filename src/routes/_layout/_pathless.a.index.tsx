import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/_pathless/a/')({
  component: () => <div>Hello /_layout/_pathless/a!</div>,
})
