import { Links, Meta, Outlet, Scripts } from '@remix-run/react';
import Index from './routes/_index';
import type { LinksFunction } from '@remix-run/node';
import styles from '~/styles/tailwind.css?url';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export default function App() {
  return (
    <html>
      <head>
        <link rel='icon' href='data:image/x-icon;base64,AA' />
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Hello! World ㅎㅎ</h1>
        {/* <Index /> */}
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
