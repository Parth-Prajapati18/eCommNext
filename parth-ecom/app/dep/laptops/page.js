"use client"
import ProductsPage from '@Components/Globals/ProductsPage';
import { useContext, useEffect } from 'react';
import { CartContext } from '@Components/Context/CartContext';
import { useRouter } from 'next/navigation';

export const metadata = {
  title: 'PartheComm.com - ParthKart',
};

const ProductList = () => {
  const { products, isSignIn } = useContext(CartContext);
  const router = useRouter();

  useEffect(() => {
    if (!isSignIn) {
      router.push('/');
    }
  }, [isSignIn, router]);

  return isSignIn ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mx-10">
      {products.map((product) => (
        <ProductsPage
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.name}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  ) : null;
};

export default ProductList;
