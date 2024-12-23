import { createFileRoute, useParams } from '@tanstack/react-router';

export const Route = createFileRoute('/$user_id')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <p>This is user_id route.</p>
      <PostIdIntro />
    </div>
  );
}

export function PostIdIntro() {
  const { user_id } = useParams({ strict: false });

  return <div>Hello /$user_id! - {user_id}</div>;
}

export function PostIdOtherIntro() {
  const user_id = useParams({ from: '/$user_id', select: (params) => params.user_id });

  return <div>Hello /$user_id! - {user_id}</div>;
}
