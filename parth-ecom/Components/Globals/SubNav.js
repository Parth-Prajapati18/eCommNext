import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SubNav() {
  return (
    <div className='flex flex-row overflow-x-scroll lg:overflow-hidden lg:px-36 space-x-6 lg:space-x-2 justify-between lg:py-2 shadow-sm'>
    
        <div className='flex flex-col justify-center pl-2 lg:pl-0'>
            <button>
            <Link href="/dep/laptops">
            <Image src='/assets/img4.webp' width={70} height={30} alt='laptops' />
            <p className='text-sm font-bold text-gray-900 text-center'>Laptops</p>
            </Link>
            </button>
        </div>
    
        <div className='flex flex-col justify-center'>
            <button>
            <Link href="/dep/mobiles">
            <Image src='/assets/img2.webp' width={70} height={30} alt='Grocery' />
            <p className='text-sm font-bold text-gray-900 text-center'>Mobiles</p>
            </Link>
            </button>
        </div>
    
        <div className='flex flex-col justify-center'>
            <button>
            <Link href='/dep/fashion'>
            <Image src='/assets/img3.webp' width={70} height={30} alt='Grocery' />
            <p className='text-sm font-bold text-gray-900 text-center'>Fashion</p>
            </Link>
            </button>
        </div>
    
        <div className='flex flex-col justify-center'>
            <button>
            <Link href='/dep/grocery'>
            <Image src='/assets/img1.webp' width={70} height={30} alt='Grocery' />
            <p className='text-sm font-bold text-gray-900 text-center'>Grocery</p>
            </Link>
            </button>
        </div>
    
        <div className='flex flex-col justify-center'>
            <button>
            <Link href='/dep/home'>
            <Image src='/assets/img5.webp' width={70} height={30} alt='Grocery' />
            <p className='text-sm font-bold text-gray-900 text-center'>Home</p>
            </Link>
            </button>
        </div>
    
        <div className='flex flex-col justify-center'>
            <button>
            <Link href='/dep/appliances'>
            <Image src='/assets/img6.webp' width={70} height={30} alt='Grocery' />
            <p className='text-sm font-bold text-gray-900 text-center'>Appliances</p>
            </Link>
            </button>
        </div>
    
        <div className='flex flex-col justify-center'>
            <button>
            <Link href='dep/travel'>
            <Image src='/assets/img7.webp' width={70} height={30} alt='Grocery' />
            <p className='text-sm font-bold text-gray-900 text-center'>Travel</p>
            </Link>
            </button>
        </div>
    
        <div className='flex flex-col justify-center'>
            <button>
            <Link href='/dep/topoffers'>
            <Image src='/assets/img8.webp' width={70} height={30} alt='Grocery' />
            <p className='text-sm font-bold text-gray-900 text-center'>Top Offers</p>
            </Link>
            </button>
        </div>
    
        <div className='flex flex-col justify-center'>
            <button>
            <Link href='/dep/beautyntoys'>
            <Image src='/assets/img9.webp' width={70} height={30} alt='Grocery' />
            <p className='text-sm font-bold text-gray-900 text-center'>Beauty & Toys</p>
            </Link>
            </button>
        </div>
    
        <div className='flex flex-col justify-center'>
            <button> 
            <Link href='/dep/twowheelers'>
            <Image src='/assets/img10.webp' width={70} height={30} alt='Grocery' />
            <p className='text-sm font-bold text-gray-900 text-center'>Two Wheelers</p>
            </Link>
            </button>
        </div>

    </div>
  )
}
