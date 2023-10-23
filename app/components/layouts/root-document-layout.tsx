import { Links, LiveReload, Meta, Scripts } from '@remix-run/react'
import React from 'react'
import NavBar from '../ui/navBar'

export interface RootDocumentLayoutProps {
  children?: React.ReactNode
}

const RootDocumentLayout: React.FC<RootDocumentLayoutProps> = ({
  children,
}) => {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="p-0 m-0 bg-white">
        <NavBar />
        {children}
        <Scripts />
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  )
}

export default RootDocumentLayout
