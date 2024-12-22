import { ThemeProvider } from '@/client/providers/theme-provider';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import React from 'react';
import { Fragment } from 'react/jsx-runtime';

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        })),
      );

export const Route = createRootRoute({
  component: () => (
    <Fragment>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <Outlet />
        <React.Suspense fallback={'🏝️'}>
          <TanStackRouterDevtools />
        </React.Suspense>
      </ThemeProvider>
    </Fragment>
  ),
});
