"use client"
import React from 'react'
import Image from 'next/image'
import { AiOutlineShoppingCart, AiOutlineSearch , AiOutlineCloseSquare } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md'
import { useState } from 'react'
import Link from 'next/link'

function navbar() {

  const [isArrowUp, setIsArrowUp] = useState(false)
  const [ isClicked , setIsClicked ] = useState(false)

  return (
    <>

      {/* Large Screen Header */}

      <div className='hidden lg:flex bg-blue-600 h-[60px] md:[70px] p-2 xl:px-10 items-center justify-center space-x-4 xl:space-x-16'>

        <div>
          <Link href='/'>
          <Image src='/assets/logo.png' width={100} height={10} alt='Logo Image' />
          </Link>
        </div>

        <div>
          <input className='rounded-sm w-[450px] h-7 xl:h-8 px-2 text-sm focus:outline-none' placeholder='Search for Products, Brands and More' />
        </div>

        <div className='space-x-7'>
          <button className='bg-white text-blue-600 font-bold px-6 xl:px-8 py-1 xl:py-2' onClick={() => setIsClicked(!isClicked)}>Login</button>
          <button className='font-bold text-white'>Become a Seller </button>
          <button className='font-bold text-white'>
            <AiOutlineShoppingCart className='inline-block px-1 text-3xl' />Cart
          </button>
        </div>

        {/* Drop Down Menu */}
        <div className='relative inline-block'>
          <div>
            <button className='font-bold text-white' onClick={() => setIsArrowUp(!isArrowUp)}>More {isArrowUp ? <MdArrowDropUp className='inline text-2xl' /> : <MdArrowDropDown className='inline text-2xl' />} </button>
          </div>

          {
            isArrowUp ?

              <div class="absolute -right-20 z-10 top-[43px] w-56 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1" role="none">

                  <a href="#" class="text-gray-700 block px-4 py-2 text-sm text-center" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                  <a href="#" class="text-gray-700 block px-4 py-2 text-sm text-center" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                  <a href="#" class="text-gray-700 block px-4 py-2 text-sm text-center" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                  <form method="POST" action="#" role="none">
                    <button type="submit" class="text-red-700 block w-full px-4 py-2 text-sm text-center" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                  </form>
                </div>
              </div> :
              ''
          }
        </div>


        {/* Drop Down End */}

      </div>






      {/* Small screen Header */}

      <div className='bg-blue-600 flex flex-col lg:hidden justify-center overflow-hidden p-2 space-y-2 pt-3'>

        <div className='flex justify-between item-center'>

          <div className='space-x-3 flex flex-row'>

            <div>
              <RxHamburgerMenu className='text-white text-2xl' />
            </div>

            <div>
              <Image src='/assets/logo.png' width={80} height={10} alt='Logo Image' />
            </div>

          </div>

          <div className='space-x-3'>
            <button className='font-bold text-white'>
              <AiOutlineShoppingCart className='inline-block text-2xl' />
            </button>

            <button className='text-white px-5 font-bold' onClick={() => setIsClicked(!isClicked)}>Login</button>
            {
        isClicked ?

      <div className='relative z-10' aria-aria-labelledby='Sign-In-Modal' role="dialog" aria-modal="true">

        <div className='fixed inset-0 bg-gray-200 bg-opacity-25 transition-opacity'></div>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full justify-center p-4 text-center items-center sm:p-0'>
            <div className='relative transform overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
              <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>

                <div className='flex justify-end'>
                      <button className='text-2xl' onClick={() => setIsClicked(false)}>
                          <AiOutlineCloseSquare />
                      </button>
                </div>

                <div className='w-full'>
                  <form>
                    <div className='mb-4'>
                      <label className='block text-gray-700 text-sm font-bold mb-2' htmlfor="username">
                        Username
                      </label>
                      <input className='shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="username" type="text" placeholder='Username' />
                    </div>
                    <div className='mb-6'>
                      <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                        Password
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    </div>
                    <div className='flex items-center justify-between'>
                      <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign In
                      </button>
                      <a class="inline-block align-baseline font-bold text-sm text-blue-700 hover:text-blue-800" href="#">
                        Forgot Password?
                      </a>
                    </div>
                  </form>
                  <p className='text-center text-gray-500 text-xs mt-3'>
                    &copy;2023 Parth's Production. All rights reserved.
                  </p>
                </div>            
              </div>
            </div>
          </div>
        </div>
        {/* Login Modal End */}
      </div>

        : ''
      }
          </div>

        </div>


        <div>
          <input className='rounded-sm text-gray-700 w-full p-1 text-sm' placeholder='Search for products, Brands and More' />
        </div>
      </div>

      {/* Login Pop Start */}
      
      {
        isClicked ?

      <div className='relative z-10' aria-aria-labelledby='Sign-In-Modal' role="dialog" aria-modal="true">

        <div className='fixed inset-0 bg-gray-200 bg-opacity-25 transition-opacity'></div>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full justify-center p-4 text-center items-center sm:p-0'>
            <div className='relative transform overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
              <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>

                <div className='flex justify-end'>
                      <button className='text-2xl' onClick={() => setIsClicked(false)}>
                          <AiOutlineCloseSquare />
                      </button>
                </div>

                <div className='w-full'>
                  <form>
                    <div className='mb-4'>
                      <label className='block text-gray-700 text-sm font-bold mb-2' htmlfor="username">
                        Username
                      </label>
                      <input className='shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="username" type="text" placeholder='Username' />
                    </div>
                    <div className='mb-6'>
                      <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                        Password
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    </div>
                    <div className='flex items-center justify-between'>
                      <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign In
                      </button>
                      <a class="inline-block align-baseline font-bold text-sm text-blue-700 hover:text-blue-800" href="#">
                        Forgot Password?
                      </a>
                    </div>
                  </form>
                  <p className='text-center text-gray-500 text-xs mt-3'>
                    &copy;2023 Parth's Production. All rights reserved.
                  </p>
                </div>            
              </div>
            </div>
          </div>
        </div>
        {/* Login Modal End */}
      </div>

        : ''
      }


    </>
  )
}

export default navbar

// npm i @emotion/cache @emotion/react @emotion/server @emotion/styled
