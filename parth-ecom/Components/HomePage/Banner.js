import React from 'react'
import Image from 'next/image'
import '@styles/main.css'



export default function Banner() {
  return (
    <div className='my-1 relative overflow-hidden'>
        <p className='absolute top-1/4 pl-3 md:pl-10 text-xl sm:text-2xl md:text-3xl xl:text-8xl text-red-800' style={{fontFamily: " 'Patua One', cursive "}}>Where Quality <br/>Meets Convenience!</p>
        <p className='absolute'>Discover a vast selection of high-quality products at your fingertips, coupled with a seamless shopping experience that ensures your needs are met with utmost ease and satisfaction.</p>
        <Image src='/assets/Main_banner.jpeg' width={0} height={0} sizes='100vw' style={{ width: '100%', height:'auto'}} alt='Website_Banner' ></Image>
    </div>
  )
}
