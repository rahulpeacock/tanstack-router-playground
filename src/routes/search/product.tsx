import { createFileRoute, useSearch } from '@tanstack/react-router';
import { fallback, zodValidator } from '@tanstack/zod-adapter';
import { z } from 'zod';

const productSearchSchema = z.object({
  page: fallback(z.number(), 1).default(1),
  filter: fallback(z.string(), '').optional(),
  sort: fallback(z.enum(['newest', 'oldest', 'price']), 'newest').default('newest'),
});

export const Route = createFileRoute('/search/product')({
  validateSearch: zodValidator(productSearchSchema),
  component: RouteComponent,
});

function RouteComponent() {
  const search = useSearch({ from: '/search/product' });
  console.log(search);

  return <div>Hello "/search/product"!</div>;
}
