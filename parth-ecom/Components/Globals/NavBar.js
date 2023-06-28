"use client"
import React from 'react'
import Image from 'next/image'
import { AiOutlineShoppingCart, AiOutlineCloseSquare } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { RxHamburgerMenu } from 'react-icons/rx'
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md'
import { useState, useContext } from 'react'
import Link from 'next/link'
import { CartContext } from '@Components/Context/CartContext'
import './NavBar.css'
import axios from 'axios';
import { useRouter } from 'next/navigation';


function navbar() {

  const router = useRouter();
  const { totalQuantity, isSignIn, setIsSignIn } = useContext(CartContext);
  const [isArrowUp, setIsArrowUp] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const [msg, setMsg] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    //Email Start
    const sendEmail = async () => {
      const emailData = {
        email: username,
        subject: 'PartheComM - Sign-up successful',
        message: `Hello ${firstname}, \nWelcome to our e-commerce store! Get ready to discover a world of exceptional products and seamless shopping, tailored just for you.`,
      };
      try {
        await axios.post('/api/sendEmail', emailData);
        console.log('Email sent successfully');
      } catch (error) {
        console.error('Error sending email:', error);
      }
    };
    //Email end 

    try {
      const response = await axios.post('/api/register', { username, password, firstname, lastname });
      if (response.status === 200) {
        router.push('/');
        sendEmail();
      }
    } catch (error) {
      setErr(error)
    }

    setTimeout(() => setIsClicked2(false), 2000);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { username, password });
      if (response.status === 200) {
        const { token } = response.data;
        setIsSignIn(true);
        localStorage.setItem('token-PartheComm', token);
        setMsg(response.data.Message);
      } else {
        setErr(response.data.Message);
        setMsg('');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErr('An error occurred during login.');
      setMsg('');
    }
    setTimeout(() => setIsClicked(false), 2000);
  };

  return (
    <>
      {console.log(isSignIn)}
      {/* Large Screen Header */}
      <div className='hidden lg:flex bg-blue-600 h-[60px] md:h-[70px] p-2 xl:px-10 items-center justify-center space-x-4 xl:space-x-16'>

        <div>
          <Link href='/'>
            <Image src='/assets/logo.png' width={100} height={10} alt='Logo Image' />
          </Link>
        </div>

        <div>
          <input className='rounded-sm w-[450px] h-7 xl:h-8 px-2 text-sm focus:outline-none' placeholder='Search for Products, Brands and More' />
        </div>

        <div className='space-x-7'>

          {console.log(isSignIn)}

          {
            isSignIn ? (
              <button className='font-bold text-white' onClick={() => {setIsSignIn(false)}}>
                Sign Out
              </button>
            ) : (
              <>
                <button
                  className='bg-white text-blue-600 font-bold px-6 xl:px-8 py-1 xl:py-2'
                  onClick={() => setIsClicked(!isClicked)}
                >
                  Sign In
                </button>
                <button
                  className='font-bold text-white'
                  onClick={() => setIsClicked2(!isClicked2)}
                >
                  Sign Up
                </button>
              </>
            )
          }

          {
            isSignIn &&
          <button className='font-bold text-white'>
            <Link href='/dep/cart' >
              <AiOutlineShoppingCart className='inline-block px-1 text-3xl' />Cart
              {totalQuantity > 0 && (
                <span className="bg-red-600 rounded-full px-1.5 py-0.5 text-white text-xs ml-1">
                  {totalQuantity}
                </span>
              )}
            </Link>
          </button>
          }
        </div>


        {
            isSignIn &&
        <div className='relative inline-block h-[60px] md:h-[70px]' onMouseOver={() => setIsArrowUp(true)} onMouseOut={() => setIsArrowUp(false)}   >
          <button className='font-bold text-white h-full' onClick={() => setIsArrowUp(!isArrowUp)} > <CgProfile className='inline text-2xl' /> {isArrowUp ? <MdArrowDropUp className='inline text-2xl' /> : <MdArrowDropDown className='inline text-2xl' />} </button>
          {/* Drop Down Menu */}
          {isArrowUp ?
            <div className="absolute -right-20 z-10 top-[60px] md:top-[70px] w-60 shadow-lg  bg-white broder border-gray-100" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
              <div className="pb-1" role="none">
                <a href="#" className="text-gray-700 block px-4 py-2 text-sm text-center hover:bg-gray-100 border border-gray-100" role="menuitem" tabIndex="-1" id="menu-item-0">Account settings</a>
                <a href="#" className="text-gray-700 block px-4 py-2 text-sm text-center hover:bg-gray-100 border border-gray-100" role="menuitem" tabIndex="-1" id="menu-item-1">Support</a>
                <a href="#" className="text-gray-700 block px-4 py-2 text-sm text-center hover:bg-gray-100 border border-gray-100" role="menuitem" tabIndex="-1" id="menu-item-2">License</a>
                <form method="POST" action="#" role="none">
                  <button type="submit" className="text-red-700 block w-full px-4 py-2 text-sm text-center hover:bg-gray-100 border border-gray-100" role="menuitem" tabIndex="-1" id="menu-item-3">Sign out</button>
                </form>
              </div>
            </div>
            :
            <></>
          }
          {/* Drop Down End */}
        </div>
        }


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
              <Link href='/dep/cart' >
                <AiOutlineShoppingCart className='inline-block text-2xl' />
                <span className="bg-red-600 rounded-full px-1.5 py-0.5 text-white text-xs ml-1">
                  {totalQuantity}
                </span>
              </Link>
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
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                  Sign In
                                </button>
                                <a className="inline-block align-baseline font-bold text-sm text-blue-700 hover:text-blue-800" href="#">
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

      {/* Login Pop Start Big Screen*/}
      {isClicked && (
        <div
          className="fixed inset-0 z-10 overflow-y-auto"
          aria-labelledby="Sign-In-Modal"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-200 bg-opacity-25 transition-opacity overflow-hidden"></div>

          <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
            <div className="relative transform overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="flex justify-end">
                  <button className="text-2xl" onClick={() => setIsClicked(false)}>
                    <AiOutlineCloseSquare />
                  </button>
                </div>

                <div className="w-full">
                  <form onSubmit={handleLogin}>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="username"
                      >
                        Username
                      </label>
                      <input
                        className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                      >
                        Sign In
                      </button>
                      <a
                        className="inline-block align-baseline font-bold text-sm text-blue-700 hover:text-blue-800"
                        href="#"
                      >
                        Forgot Password?
                      </a>
                    </div>
                  </form>
                  {err && <p className="text-red-300 p-1">{err}</p>}
                  {msg && <p className="text-green-300 p-1">{msg}</p>}
                  <p className="text-center text-gray-500 text-xs mt-3">
                    &copy;2023 Parth's Production. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Login Pop end Big Screen*/}


      {/* Sign Up Start Big Screen*/}

      {
        isClicked2 &&
        <div className='relative z-10' aria-aria-labelledby='Sign-In-Modal' role="dialog" aria-modal="true">
          <div className='fixed inset-0 bg-gray-200 bg-opacity-25 transition-opacity'></div>
          <div className='fixed inset-0 z-10 overflow-y-auto'>
            <div className='flex min-h-full justify-center p-4 text-center items-center sm:p-0'>
              <div className='relative transform overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                  <div className='flex justify-end'>
                    <button className='text-2xl' onClick={() => setIsClicked2(false)}>
                      <AiOutlineCloseSquare />
                    </button>
                  </div>
                  <h1 className='block text-gray-700 text-xl font-bold mb-3 text-center'>
                    User Registration
                  </h1>
                  <div className='w-full'>
                    <form onSubmit={handleSubmit} >
                      <div className='flex flex-column'>
                        <div>
                          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='firstname'>First Name</label>
                          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline mr-2" id='firstname' value={firstname}
                            onChange={(e) => setFirstname(e.target.value)} />
                        </div>
                        <div>
                          <label className='block text-gray-700 text-sm font-bold mb-2 ml-2' htmlform='lastname'>Last Name</label>
                          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ml-2" id='lastname' value={lastname}
                            onChange={(e) => setLastname(e.target.value)} />
                        </div>
                      </div>
                      <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlfor="username" >
                          Email
                        </label>
                        <input className='shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="username" type="text" value={username}
                          onChange={(e) => setUsername(e.target.value)} />
                      </div>
                      <div className='mb-6'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                          Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" value={password}
                          onChange={(e) => setPassword(e.target.value)} />
                      </div>
                      <div className='flex items-center justify-center'>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                          Create
                        </button>
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
        </div>
      }
      {/* Become a seller End Big Screen*/}


    </>
  )
}

export default navbar

