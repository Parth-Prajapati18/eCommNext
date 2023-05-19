import React from 'react'
import Image from 'next/image'
import {AiOutlineShoppingCart , AiOutlineSearch} from 'react-icons/ai'
import {RxHamburgerMenu} from 'react-icons/rx'
import { MdArrowDropUp , MdArrowDropDown} from 'react-icons/md'

function navbar() {
  return (
    <>

     {/* Large Screen Header */}
    
    <div className='hidden lg:flex bg-blue-600 h-[60px] md:[70px] p-2 xl:px-10 items-center justify-center space-x-4 xl:space-x-20'>
       
       <div>
          <Image src='/assets/logo.png' width={100} height={10} alt='Logo Image' />
       </div>

       <div>
          <input className='rounded-sm w-[450px] h-7 xl:h-8 px-2 text-sm' placeholder='Search for Products, Brands and More'/>
       </div>

       <div className='space-x-7'>
          <button className='bg-white text-blue-600 font-bold px-6 xl:px-8 py-1 xl:py-2'>Login</button>
          <button className='font-bold text-white'>Become a Seller </button>
          <button className='font-bold text-white'>More <MdArrowDropUp /> </button>
          <button className='font-bold text-white'>
            <AiOutlineShoppingCart className='inline-block px-1 text-3xl' />Cart
          </button>
       </div>

    </div>






    {/* Small screen Header */}

      <div className='bg-blue-600 flex flex-col lg:hidden justify-center overflow-hidden p-2 space-y-2 pt-3'>
              
            <div className='flex justify-between item-center'>

              <div className='space-x-3 flex flex-row'>
                
                <div>
                  <RxHamburgerMenu className='text-white text-2xl'/>
                </div>

                <div>
                <Image src='/assets/logo.png' width={80} height={10} alt='Logo Image' />
                </div>

              </div>

             <div className='space-x-3'>
              <button className='font-bold text-white'>
               <AiOutlineShoppingCart className='inline-block text-2xl' />
              </button>
              
              <button className='text-white px-5 font-bold'>Login</button>

              </div>

            </div>
              

            <div>
                <input className='rounded-sm w-full p-1 text-sm' placeholder='Search for products, Brands and More' />
            </div>

      </div>

    </>
  )
}

export default navbar
