import { Outlet } from '@remix-run/react';
import { useTransition } from 'react';

const Product = () => {
  const t = useTransition();
  console.log(t);
  return (
    <div className="mx-7">
      <h2 className="text-3xl font-extrabold text-amber-600">Product Layout</h2>
      <Outlet />
    </div>
  );
};

export default Product;
