"use client"
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([])

    const addToCart = (item) => {

            setCartItems((prevItems) => [...prevItems, item]);
      };
    
      const removeFromCart = (item) => {
        setCartItems((prevItems) => prevItems.filter((prevItem) => prevItem.id !== item.id));
      };

      const totalQuantity = cartItems.reduce(
        (accumulator, item) => accumulator + item.quantity, 0
      );

      const products = [
        {
          id: 1,
          name: 'Product 1',
          price: 19.99,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: '/assets/SPI1.jpg',
        },
        {
          id: 2,
          name: 'Product 2',
          price: 29.99,
          description: 'Nulla euismod felis ac fermentum pharetra.',
          image: '/assets/SPI2.jpg',
        },
        {
          id: 3,
          name: 'Product 3',
          price: 39.99,
          description: 'Praesent condimentum justo ac tempor tincidunt.',
          image: '/assets/SPI3.jpg',
        },
        {
          id: 4,
          name: 'Product 4',
          price: 49.99,
          description: 'Praesent condimentum justo ac tempor tincidunt.',
          image: '/assets/SPI4.jpg',
        },
        {
          id: 5,
          name: 'Product 5',
          price: 59.99,
          description: 'Praesent condimentum justo ac tempor tincidunt.',
          image: '/assets/SPI5.jpg',
        },
        {
          id: 6,
          name: 'Product 6',
          price: 69.99,
          description: 'Praesent condimentum justo ac tempor tincidunt.',
          image: '/assets/SPI9.jpg',
        },
        {
          id: 7,
          name: 'Product 7',
          price: 79.99,
          description: 'Praesent condimentum justo ac tempor tincidunt.',
          image: '/assets/SPI7.jpg',
        },
        {
          id: 8,
          name: 'Product 8',
          price: 89.99,
          description: 'Praesent condimentum justo ac tempor tincidunt.',
          image: '/assets/SPI8.jpg',
        },
        {
          id: 9,
          name: 'Product 9',
          price: 99.99,
          description: 'Praesent condimentum justo ac tempor tincidunt.',
          image: '/assets/SPI9.jpg',
        },
        {
          id: 10,
          name: 'Product 10',
          price: 109.99,
          description: 'Praesent condimentum justo ac tempor tincidunt.',
          image: '/assets/SPI1.jpg',
        }
      ]; 

    return (
    <CartContext.Provider value={ {cartItems, addToCart, removeFromCart, totalQuantity, products }}>
        {children}
    </CartContext.Provider>
    );
}