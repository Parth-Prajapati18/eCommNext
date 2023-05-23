"use client"
import React from 'react'
import Product from './Product'
import Image from 'next/image'

export default function HomeProducts() {

    const productList = [
    {
        id: '1' ,
        imgurl: '/assets/PI1.webp',
        heading: 'Top Mirroeless Cameras',
        price: 'Shop Now!',
        summary: 'Cannon, Sony, Samsung...'
    },
    {
        id: '2' ,
        imgurl: '/assets/PI2.webp',
        heading: 'Top Mirroeless Cameras',
        price: 'Shop Now!',
        summary: 'Cannon, Sony, Samsung...'
    },
    {
        id: '3' ,
        imgurl: '/assets/PI3.webp',
        heading: 'Top Mirroeless Cameras',
        price: 'Shop Now!',
        summary: 'Cannon, Sony, Samsung...'
    },
    {
        id: '4' ,
        imgurl: '/assets/PI4.webp',
        heading: 'Top Mirroeless Cameras',
        price: 'Shop Now!',
        summary: 'Cannon, Sony, Samsung...'
    },
    {
        id: '5' ,
        imgurl: '/assets/PI5.webp',
        heading: 'Top Mirroeless Cameras',
        price: 'Shop Now!',
        summary: 'Cannon, Sony, Samsung...'
    }
]

  return (
    <>
    <div className='relative'>
        <h1 className='text-4xl' >Best of</h1>
        <h1 className='text-4xl'>Electronics</h1>
        <Image src='/assets/BI1.webp' width={250} height={50} alt='Image 1' />
    </div>
    <div className='flex flex-row justify-between mx-32 mt-10'>
        {
            productList.map( item => (
                <Product imgurl={item.imgurl} heading={item.heading}  price={item.price} summary={item.summary} />
                ))
            }
    </div>
    </>    
  )
}
