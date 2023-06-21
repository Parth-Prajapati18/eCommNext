"use client"
import '@styles/globals.css';
import Electronics from '@/Components/HomePage/Electronics'
import Beauty from '@/Components/HomePage/Beauty'
import Banner from '@Components/HomePage/Banner';

export const  metadata = {
  title: 'PartheComm.com - ParthKart '
}

export default function Home() {
  return (
    <div>
      <Banner />
      <Electronics />
      <Beauty />
      <Electronics />
      <Beauty />
    </div>
  )
}
