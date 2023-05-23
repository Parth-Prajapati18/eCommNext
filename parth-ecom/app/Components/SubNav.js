import React from 'react'
import Image from 'next/image'

export default function SubNav() {
  return (
    <div className='flex flex-row overflow-x-scroll lg:overflow-hidden lg:px-36 space-x-6 lg:space-x-2 justify-between lg:py-2 shadow-xl'>
    
        <div className='flex flex-col justify-center pl-2 lg:pl-0'>
            <button>
            <Image src='/assets/img1.webp' width={70} height={30} alt='Grocery' />
            <p className='text-sm font-bold text-gray-900 text-center'>Grocery</p>
            </button>
        </div>
    
        <div className='flex flex-col justify-center'>
            <button>
            <Image src='/assets/img2.webp' width={70} height={30} alt='Grocery' />
            <p className='text-sm font-bold text-gray-900 text-center'>Mobiles</p>
            </button>
        </div>
    
        <div className='flex flex-col justify-center'>
            <button>
            <Image src='/assets/img3.webp' width={70} height={30} alt='Grocery' />
            <p className='text-sm font-bold text-gray-900 text-center'>Fashion</p>
            </button>
        </div>
    
        <div className='flex flex-col justify-center'>
            <button>
            <Image src='/assets/img4.webp' width={70} height={30} alt='Grocery' />
            <p className='text-sm font-bold text-gray-900 text-center'>Electronic</p>
            </button>
        </div>
    
        <div className='flex flex-col justify-center'>
            <button>
            <Image src='/assets/img5.webp' width={70} height={30} alt='Grocery' />
            <p className='text-sm font-bold text-gray-900 text-center'>Home</p>
            </button>
        </div>
    
        <div className='flex flex-col justify-center'>
            <button>
            <Image src='/assets/img6.webp' width={70} height={30} alt='Grocery' />
            <p className='text-sm font-bold text-gray-900 text-center'>Appliances</p>
            </button>
        </div>
    
        <div className='flex flex-col justify-center'>
            <button>
            <Image src='/assets/img7.webp' width={70} height={30} alt='Grocery' />
            <p className='text-sm font-bold text-gray-900 text-center'>Travel</p>
            </button>
        </div>
    
        <div className='flex flex-col justify-center'>
            <button>
            <Image src='/assets/img8.webp' width={70} height={30} alt='Grocery' />
            <p className='text-sm font-bold text-gray-900 text-center'>Top Offers</p>
            </button>
        </div>
    
        <div className='flex flex-col justify-center'>
            <button>
            <Image src='/assets/img9.webp' width={70} height={30} alt='Grocery' />
            <p className='text-sm font-bold text-gray-900 text-center'>Beauty & Toys</p>
            </button>
        </div>
    
        <div className='flex flex-col justify-center'>
            <button>
            <Image src='/assets/img10.webp' width={70} height={30} alt='Grocery' />
            <p className='text-sm font-bold text-gray-900 text-center'>Two Wheelers</p>
            </button>
        </div>

    </div>
  )
}
