"use client"
import '@styles/globals.css';
import { Inter } from 'next/font/google'
import  NavBar  from '@/Components/Globals/NavBar'
import SubNav from '@/Components/Globals/SubNav'
import Footer from '@/Components/Globals/Footer'
import { CartProvider } from '@/Components/Context/CartContext'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Parth eCommWebsite',
  description: 'Parth Prajapati',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>        
        <CartProvider>
        <NavBar />
        <SubNav />
        {children}
        <Footer />
        </CartProvider>
        </body>
    </html>
  )
}
