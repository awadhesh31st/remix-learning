import {
  type ActionFunction,
  type ActionFunctionArgs,
  json,
  type LoaderFunction,
} from '@remix-run/node';
import {
  Await,
  Form,
  useActionData,
  useLoaderData,
  useRouteError,
} from '@remix-run/react';
import { Suspense } from 'react';
import InputForm from '~/components/form-components/input';
import DataList from '~/components/ui/list';
import { type ErrorProps } from '~/types/error-type';

export const loader: LoaderFunction = async () => {
  const photoList = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = await photoList.json();
  const splitData = data.slice(0, 15);
  return { photos: splitData };
};

export const action: ActionFunction = async ({
  request,
}: ActionFunctionArgs) => {
  const data = await request.formData();
  return json({
    message: `Hello, ${data.get('fname')} - ${data.get('lname')}`,
  });
};

const ProductForm = () => {
  const { photos } = useLoaderData<typeof loader>();
  const data = useActionData<typeof action>();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-5">
      <Form
        className="col-span-1 mx-4 sm:col-span-2"
        method="post"
        action="/product?index"
      >
        <InputForm name="fname" type="text" placeholder="Enter First Name" />
        <InputForm name="lname" type="text" placeholder="Enter Last Name" />
        <button className="px-4 py-1 rounded-md bg-amber-400" type="submit">
          Save
        </button>
        {JSON.stringify(data)}
      </Form>
      <div className="flex flex-wrap col-span-1 mx-4 sm:col-span-2">
        <Suspense fallback="Get data ...">
          <Await resolve={photos} errorElement="Error ...">
            <DataList />
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export const ErrorBoundary = () => {
  const error = useRouteError() as ErrorProps;
  return (
    <div className="text-base font-thin text-rose-500">{error?.statusText}</div>
  );
};

export default ProductForm;
