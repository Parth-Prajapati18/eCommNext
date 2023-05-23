"use client"

import './globals.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const  metadata = {
  title: 'PartheComm.com - Wear the code'
}

export default function Home() {
  return (
    <div>
       <Box className='bg-red-100' component="span" sx={{ p: 2, border: '1px dashed grey' }}>
      <Button>Save</Button>
    </Box>
    </div>
  )
}
