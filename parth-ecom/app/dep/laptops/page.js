"use client"
import ProductsPage from '@Components/Globals/ProductsPage';
import { useContext } from 'react';
import { CartContext } from '@Components/Context/CartContext';

export const  metadata = {
  title: 'PartheComm.com - ParthKat',
}

const ProductList = () => {
  
  const { products } = useContext(CartContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mx-10">
      {products.map((product) => (
        <ProductsPage id={product.id} image={product.image} name={product.name} description={product.description} price={product.price} />
      ))}
    </div>
  );
};

export default ProductList;
