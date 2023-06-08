"use client"
import '@styles/globals.css';
import Electronics from '@/Components/HomePage/Electronics'
import Beauty from '@/Components/HomePage/Beauty'

export const  metadata = {
  title: 'PartheComm.com - ParthKart '
}

export default function Home() {
  return (
    <div>
      <Electronics />
      <Beauty />
      <Electronics />
      <Beauty />
    </div>
  )
}
