import React from 'react';
import Image from 'next/image';

const CartPage = () => {
    const cartItems = [
        {
          id: 1,
          name: 'Product 1',
          price: 19.99,
          quantity: 2,
          image: '/assets/img1.webp',
        },
        {
          id: 2,
          name: 'Product 2',
          price: 29.99,
          quantity: 1,
          image: '/assets/img2.webp',
        },
        {
          id: 3,
          name: 'Product 3',
          price: 39.99,
          quantity: 3,
          image: '/assets/img3.webp',
        },
      ];

  const totalPrice = cartItems.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );

  const tax = totalPrice * 0.13;
  const totalAmount = totalPrice + tax;

  return (
    <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold ml-2">Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={150}
                  height={100}
                />
              </div>
              <h2 className="text-xl font-bold mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-2">Price: ${item.price}</p>
              <p className="text-gray-600 mb-4">Quantity: {item.quantity}</p>
              <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded">
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between">
            <p className="text-gray-600">Total Price:</p>
            <p className="font-bold">${totalPrice.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600">Tax (13%):</p>
            <p className="font-bold">${tax.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="text-gray-600">Total Amount:</p>
            <p className="font-bold">${totalAmount.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;