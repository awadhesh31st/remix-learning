import { type MetaArgs } from '@remix-run/node';
import { type MetaFunction, useParams } from '@remix-run/react';

export const meta: MetaFunction = ({ params }: MetaArgs) => {
  return [{ title: `Product - ${params?.slug}` }];
};

const ProductDetail = () => {
  const { slug } = useParams();
  return <div>Product - {slug}</div>;
};

export default ProductDetail;
