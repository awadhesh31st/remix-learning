import { Link, Links, Meta, Scripts, useRouteError } from '@remix-run/react'
import { type ErrorProps } from '~/types/error-type'

const ErrorLayout = () => {
  const error: ErrorProps = useRouteError() as ErrorProps

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex flex-col items-center h-screen place-content-center">
          <h2 className="mb-4 text-2xl font-semibold text-red-500">Opps !</h2>
          <p>
            {error.status} - {error.statusText}
          </p>
          <p className="text-base font-thin">{error.data}</p>
          <Link to="/" className="px-4 py-1 mt-4 rounded-lg bg-amber-400">
            Go home
          </Link>
        </div>
        <Scripts />
      </body>
    </html>
  )
}

export default ErrorLayout
