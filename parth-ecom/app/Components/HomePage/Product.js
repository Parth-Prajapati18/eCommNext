"use client"
import React from 'react'
import Image from 'next/image'

export default function Product( { heading, price, summary, imgurl }) {
  return (
    <div className='inline-block relative justify-center p-8 mb-2'>
        
        <div className='h-[220px] w-{1/5} p-2 relative'>
          <Image className='aboslute' src={imgurl} width={190} height={60} alt='Product Image 1' />
        </div>

        <div className='text-center p-2'>
            <h3 className='text-md font-bold'> {heading}</h3>
            <p className='text-md text-green-700 py-2 '> {price} </p>
            <p className='text-sm text-slate-500'> {summary}</p>
        </div>
    </div>
  )
}
