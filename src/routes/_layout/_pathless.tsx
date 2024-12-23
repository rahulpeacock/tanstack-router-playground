import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/_pathless')({
  component: () => (
    <div>
      Hello /_layout/_pathless! <Outlet />
    </div>
  ),
})
