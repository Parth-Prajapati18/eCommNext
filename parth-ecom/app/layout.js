"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './Components/NavBar.js'
import SubNav from './Components/SubNav'
import Footer from './Components/Footer'
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import createEmotionCache from './theme/createEmotionCache'
import lightTheme from './theme/lightTheme'
import { CartProvider } from './global/CartContext'

const clientSideEmotionCache = createEmotionCache();

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children, emotionCache = clientSideEmotionCache }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
        <CartProvider>
        <CssBaseline />
        <NavBar />
        <SubNav />
        {children}
        <Footer />
        </CartProvider>
        </ThemeProvider>
        </CacheProvider>
        </body>
    </html>
  )
}
