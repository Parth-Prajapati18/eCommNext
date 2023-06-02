import React from 'react'

export default function Layout({children}) {
  return (
    <div className='p-4'>
        <div>
            {children}
        </div>
    </div>
  )
}
