"use client"
import './globals.css'
import Electonics from './Components/HomePage/Electronics'
import Beauty from './Components/HomePage/Beauty'

export const  metadata = {
  title: 'PartheComm.com - ParthKart '
}

export default function Home() {
  return (
    <div>
      <Electonics />
      <Beauty />
      <Electonics />
      <Beauty />
    </div>
  )
}
