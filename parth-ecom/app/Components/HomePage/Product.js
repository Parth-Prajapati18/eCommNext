"use client"
import React from 'react'
import Image from 'next/image'

export default function Product( { heading, price, summary, imgurl }) {
  return (
    <div className='grid grid-row-2 my-2 xl:my-4'>
        
        <div className='h-[120px] sm:h-[200px] w-auto p-2 m-auto relative'>
          <Image className='hidden sm:grid aboslute' src={imgurl} width={170} height={50} alt='Product Image 1' />
          <Image className='sm:hidden aboslute' src={imgurl} width={90} height={30} sizes='(max-width: 768px) 33vw, 100vw'  alt='Product Image 1' />

        </div>

        <div className='text-center p-1 md:p-2'>
            <h3 className='text-sm sm:text-md font-bold'> {heading}</h3>
            <p className='text-sm sm:text-md text-green-700 py-2 '> {price} </p>
            <p className='hidden sm:grid text-sm text-slate-500'> {summary}</p>
        </div>
    </div>
  )
}
