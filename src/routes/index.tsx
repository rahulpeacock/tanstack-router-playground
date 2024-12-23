import { Button } from '@/components/ui/button';
import { Link, createFileRoute } from '@tanstack/react-router';
import { PostIdIntro } from './$user_id';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className='p-2'>
      <h3>Welcome Home!</h3>
      <Button asChild>
        <Link to='/about'>About</Link>
      </Button>
      <Button asChild>
        <Link to='/posts'>Posts</Link>
      </Button>
      <Button asChild>
        <Link to='/posts/hello'>Hello</Link>
      </Button>
      <Button asChild>
        <Link from='/' to='/posts/hello/world'>
          Hello World
        </Link>
      </Button>
      <Button asChild>
        <Link to='/$user_id' params={{ user_id: 'rahulpeacock' }}>
          User id
        </Link>
      </Button>

      <PostIdIntro />
    </div>
  );
}
