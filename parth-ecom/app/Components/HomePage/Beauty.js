"use client"
import React from 'react'
import Product from './Product'
import Image from 'next/image'

export default function Electonics() {

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
    },
    {
        id: '6' ,
        imgurl: '/assets/PI5.webp',
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
    }
]

  return (
    <div>       
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 md:gap-x-1 justify-between mx-5 xl:mx-10 mt-5 sm:mt-10 bg-white border border-slate-200 drop-shadow-2xl'>

        {/* <div>
        <h1 className='text-3xl text-center pt-8 px-4' >Best of Electonics</h1>
        <div className='flex justify-center mt-10'>
        <button className='text-sm text-white bg-blue-600 p-3 font-bold absolute '>VIEW ALL</button>
        </div>
        <Image className='absolute bottom-0 w-auto' src='/assets/BI1.webp' width={240} height={50} alt='Image 1' />
        </div> */}

        <div className='absolute bg-blue-600 text-white -top-[15px] -left-[20px] px-4 py-1 text-sm 2xl:text-lg'>
            Best of Beauty
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
