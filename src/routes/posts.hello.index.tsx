import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/hello/')({
  component: () => <div>Hello /posts/hello!</div>,
})
