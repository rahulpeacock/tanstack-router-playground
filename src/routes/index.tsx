import { Button } from '@/components/ui/button';
import { Link, createFileRoute, linkOptions } from '@tanstack/react-router';
import { Home, Text } from 'lucide-react';
import { PostIdIntro } from './$user_id';

export const Route = createFileRoute('/')({
  component: Index,
});

const LINKS = [
  linkOptions({
    to: '/',
    label: 'Home',
    icon: Home,
  }),
  linkOptions({
    to: '/search/product',
    label: 'About',
    icon: Text,
  }),
];

function Index() {
  return (
    <div className='p-2'>
      <h3>Welcome Home!</h3>
      {LINKS.map((link) => (
        <Button key={link.to} asChild>
          <Link {...link}>
            {<link.icon size={12} />} {link.label}
          </Link>
        </Button>
      ))}
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
      <Button asChild>
        <Link to='/search/product'>Product</Link>
      </Button>
      <Button asChild>
        <Link to='.' search={(prev) => ({ ...prev, page: 2 })}>
          Product index
        </Link>
      </Button>
      <PostIdIntro />
    </div>
  );
}
