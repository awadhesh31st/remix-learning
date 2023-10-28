import { Link, useActionData, useNavigation } from '@remix-run/react';

export const action = () => {
  return {};
};

const Product = () => {
  const { state } = useNavigation();
  const data = useActionData();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-5">
      {state === 'loading' ? (
        'We are getting your data ...'
      ) : (
        <Link to="/product/form">Add</Link>
      )}
      {JSON.stringify(data)}
    </div>
  );
};

export default Product;
