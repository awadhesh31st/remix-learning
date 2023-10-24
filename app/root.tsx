import {
  type MetaArgs,
  type LinksFunction,
  type MetaFunction,
} from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import RootDocumentLayout from '~/components/layouts/root-document-layout';

import useStyle from '~/styles/global.css';
import { getMeta } from './utils/meta-find';
import ErrorDocumentLayout from './components/layouts/error-layout';

export const meta: MetaFunction = ({ location }: MetaArgs) => {
  const path = location.pathname.split('/');
  return getMeta(path);
};

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: useStyle,
    },
  ];
};

const Root = () => {
  return (
    <RootDocumentLayout>
      <Outlet />
    </RootDocumentLayout>
  );
};

export const ErrorBoundary = () => {
  return <ErrorDocumentLayout />;
};

export default Root;
