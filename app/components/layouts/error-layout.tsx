import { Link, Links, Meta, Scripts, useRouteError } from '@remix-run/react';
import React from 'react';
import { type ErrorProps } from '~/types/error-type';

export interface ErrorDocumentLayoutProps {
  children?: React.ReactNode;
}

const ErrorDocumentLayout = () => {
  const error: ErrorProps = useRouteError() as ErrorProps;
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <ErrorLayout {...error} />
        <Scripts />
      </body>
    </html>
  );
};

export default ErrorDocumentLayout;

export const ErrorLayout: React.FC<ErrorProps> = ({
  status,
  statusText,
  data,
}) => {
  return (
    <div className="flex flex-col items-center h-screen place-content-center">
      <h2 className="mb-4 text-2xl font-semibold text-red-500">Opps !</h2>
      <p>
        {status} - {statusText}
      </p>
      <p className="text-base font-thin">{data}</p>
      <Link to="/" className="px-4 py-1 mt-4 rounded-lg bg-amber-400">
        Go home
      </Link>
    </div>
  );
};
