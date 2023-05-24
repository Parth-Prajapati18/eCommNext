"use client"
import React from 'react'
import Product from './Product'
import Image from 'next/image'

export default function Beauty() {

    const productList = [
    {
        id: '1' ,
        imgurl: '/assets/PI6.webp',
        heading: 'Top Mirroeless Cameras',
        price: 'Shop Now!',
        summary: 'Cannon, Sony, Samsung...'
    },
    {
        id: '2' ,
        imgurl: '/assets/PI7.webp',
        heading: 'Top Mirroeless Cameras',
        price: 'Shop Now!',
        summary: 'Cannon, Sony, Samsung...'
    },
    {
        id: '3' ,
        imgurl: '/assets/PI0.webp',
        heading: 'Top Mirroeless Cameras',
        price: 'Shop Now!',
        summary: 'Cannon, Sony, Samsung...'
    },
    {
        id: '4' ,
        imgurl: '/assets/PI9.webp',
        heading: 'Top Mirroeless Cameras',
        price: 'Shop Now!',
        summary: 'Cannon, Sony, Samsung...'
    },
    {
        id: '5' ,
        imgurl: '/assets/PI010.webp',
        heading: 'Top Mirroeless Cameras',
        price: 'Shop Now!',
        summary: 'Cannon, Sony, Samsung...'
    }
]

  return (
    <div>
    <div className='flex flex-row justify-between mx-32 mt-5 bg-white border border-slate-100 drop-shadow-2xl'>

        <div className='relative w-1/6'>
        <h1 className='text-3xl text-center pt-8 px-4' >Beauty, Food, Toys & more</h1>
        <div className='flex justify-center mt-10'>
        <button className='text-sm text-white bg-blue-600 p-3 font-bold absolute '>VIEW ALL</button>
        </div>
        <Image className='absolute bottom-0 w-full' src='/assets/BI2.webp' width={250} height={50} alt='Image 1' />
        </div>

        {
            productList.map( item => (
                <Product imgurl={item.imgurl} heading={item.heading}  price={item.price} summary={item.summary} />
                ))
            }
    </div>
    </div>    
  )
}
