import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/posts/hello/world')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello /posts/hello/world!</div>;
}
