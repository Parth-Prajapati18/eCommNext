"use client"
import axios from 'axios';
import { headers } from 'next/dist/client/components/headers';
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [isSignIn, setIsSignIn] = useState(false);
    const [email, setEmail] = useState(null);

      const addToCart = (item) => {
            setCartItems((prevItems) => [...prevItems, item]);
      };
    
      const removeFromCart = (item) => {
        setCartItems((prevItems) => prevItems.filter((prevItem) => prevItem.id !== item.id));
      };

      const removeAll = () => {
        setCartItems([]);
      };

      const totalQuantity = cartItems.reduce(
        (accumulator, item) => accumulator + item.quantity, 0
      );

      // const products = [
      //   {
      //     id: 1,
      //     name: 'Product 1',
      //     price: 19.99,
      //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      //     image: '/assets/SPI1.jpg',
      //   },
      //   {
      //     id: 2,
      //     name: 'Product 2',
      //     price: 29.99,
      //     description: 'Nulla euismod felis ac fermentum pharetra.',
      //     image: '/assets/SPI2.jpg',
      //   },
      //   {
      //     id: 3,
      //     name: 'Product 3',
      //     price: 39.99,
      //     description: 'Praesent condimentum justo ac tempor tincidunt.',
      //     image: '/assets/SPI3.jpg',
      //   },
      //   {
      //     id: 4,
      //     name: 'Product 4',
      //     price: 49.99,
      //     description: 'Praesent condimentum justo ac tempor tincidunt.',
      //     image: '/assets/SPI4.jpg',
      //   },
      //   {
      //     id: 5,
      //     name: 'Product 5',
      //     price: 59.99,
      //     description: 'Praesent condimentum justo ac tempor tincidunt.',
      //     image: '/assets/SPI5.jpg',
      //   },
      //   {
      //     id: 6,
      //     name: 'Product 6',
      //     price: 69.99,
      //     description: 'Praesent condimentum justo ac tempor tincidunt.',
      //     image: '/assets/SPI9.jpg',
      //   },
      //   {
      //     id: 7,
      //     name: 'Product 7',
      //     price: 79.99,
      //     description: 'Praesent condimentum justo ac tempor tincidunt.',
      //     image: '/assets/SPI7.jpg',
      //   },
      //   {
      //     id: 8,
      //     name: 'Product 8',
      //     price: 89.99,
      //     description: 'Praesent condimentum justo ac tempor tincidunt.',
      //     image: '/assets/SPI8.jpg',
      //   },
      //   {
      //     id: 9,
      //     name: 'Product 9',
      //     price: 99.99,
      //     description: 'Praesent condimentum justo ac tempor tincidunt.',
      //     image: '/assets/SPI9.jpg',
      //   },
      //   {
      //     id: 10,
      //     name: 'Product 10',
      //     price: 109.99,
      //     description: 'Praesent condimentum justo ac tempor tincidunt.',
      //     image: '/assets/SPI1.jpg',
      //   }
      // ]; 


      useEffect(() => {
        const fetchData = async () => {
          try {
            const token = localStorage.getItem("token-PartheComm");
            const response = await axios.get('/api/products', {headers: {
              authorization: `Bearer ${token}`
            } });
    
            if (response.status === 200) {
              const products = response.data.message;
              console.log(response);
              console.log(response.data.userId);
              setProducts(products);
            }
          } catch (error) {
            console.error('Error Fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

return (
    <CartContext.Provider value={ {cartItems, addToCart, removeFromCart, totalQuantity, products, removeAll, isSignIn, setIsSignIn, email, setEmail}}>
        {children}
    </CartContext.Provider>
    );
}