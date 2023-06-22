"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

export default function page() {

    const router = useRouter();

    return (
        <>
            <div className='flex justify-center mt-5 text-xl text-center'>Order has been Placed! <br /> Thank You!</div>
            <div className='my-8 flex justify-center'>
                <button onClick={() => { router.push('/') }} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded mx-10">
                    Home
                </button>

                <button onClick={() => { router.push('/dep/laptops') }} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded mx-10">
                    Continue Shoppoing? 
                </button>
            </div>
        </>
    )
}
