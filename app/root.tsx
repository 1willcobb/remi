import type { LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";

export const loader = async ({ request }: LoaderFunctionArgs) => {

  
  return null;
};


export function Layout({ children }: { children: React.ReactNode }) {
  const data = useLoaderData()


  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <Analytics />
      </body>
      <p>hey</p>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
