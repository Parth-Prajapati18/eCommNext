"use client"
import React, { useEffect } from "react"
import { useContext } from 'react';
import { CartContext } from '@Components/Context/CartContext';
import { useState } from "react";


export default function ProductsPage({image, name, id, description, price}) {

  const { cartItems, addToCart } = useContext(CartContext);
  const item = {
    image: image,
    name: name,
    id: id,
    description: description,
    price: price,
    quantity: 1,
  }

  const [IsAdded, setIsAdded] = useState(false)
  

  return (
     <div
          key={id}
          className="bg-white shadow-lg p-6 mb-4"
        >
          <img
            src={image}
            alt={name}
            className="w-full h-50 object-cover mb-4"
          />
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">${price}</span>
            <button onClick={() => { addToCart(item); setIsAdded(true);}} className={`px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white ${ IsAdded ? 'bg-blue-300 cursor-not-allowed hover:bg-blue-300': '' }`} disabled={IsAdded} >
              { IsAdded ? 'Added to Cart' :  'Add to Cart' }
            </button>
          </div>
        </div>
  )
}