import React from 'react'
import Image from 'next/image'
import '@styles/main.css'

export default function Banner() {
  return (
    <div className='my-1 relative overflow-hidden'>
        <div className='absolute top-1/4 pl-3 md:pl-10' ><span className='text-xl sm:text-2xl md:text-3xl xl:text-6xl text-red-800' style={{fontFamily: " 'Patua One', cursive "}}>"Where Quality Meets Convenience!"</span>
        <div className='text-yellow-700 hidden lg:block text-md md:text-2xl top-5 font-serif mt-3 w-1/2'>Discover a vast selection of high-quality products at your fingertips, coupled with a seamless shopping experience that ensures your needs are met with  utmost ease and satisfaction.</div></div>
        <Image src='/assets/Main_banner.jpeg' width={0} height={0} sizes='100vw' style={{ width: '100%', height:'auto'}} alt='Website_Banner' ></Image>
    </div>
  )
}
