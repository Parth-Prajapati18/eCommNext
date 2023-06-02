"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './Components/NavBar.js'
import SubNav from './Components/SubNav'
import Footer from './Components/Footer'
import { CartProvider } from './global/CartContext'


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
