import {
  type MetaArgs,
  type LinksFunction,
  type MetaFunction,
} from '@remix-run/node'
import { Outlet } from '@remix-run/react'
import RootDocumentLayout from '~/components/layouts/root-document-layout'

import useStyle from '~/styles/global.css'
import ErrorLayout from './components/layouts/error-layout'
import { getMeta } from './utils/meta-find'

export const meta: MetaFunction = ({ location }: MetaArgs) => {
  const path = location.pathname.split('/')
  return getMeta(path)
}

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: useStyle,
    },
  ]
}

const Root = () => {
  return (
    <RootDocumentLayout>
      <Outlet />
    </RootDocumentLayout>
  )
}

export const ErrorBoundary = () => {
  return <ErrorLayout />
}

export default Root
