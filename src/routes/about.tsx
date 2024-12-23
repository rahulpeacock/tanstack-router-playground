import { Button } from '@/components/ui/button';
import { Link, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: () => (
    <div>
      Hello /about!{' '}
      <div>
        <Button asChild>
          <Link to='/'>Back to Home</Link>
        </Button>
        <Button asChild>
          <Link to='/posts'>Posts</Link>
        </Button>
        <Button asChild>
          <Link to='/posts/hello'>Hello</Link>
        </Button>
      </div>
    </div>
  ),
});
