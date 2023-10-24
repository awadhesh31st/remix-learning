import { Link, useActionData } from '@remix-run/react';

export const action = () => {
  return {};
};

const Product = () => {
  const data = useActionData();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-5">
      <Link to="/product/form">Add</Link>
      {JSON.stringify(data)}
    </div>
  );
};

export default Product;
