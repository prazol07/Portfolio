import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <Link href="/" className='w-24 h-24 bg-dark text-light flex items-center justify-center rounded-full 
        text-2xl font-bold shadow-md border border-solid border-dark  hover:bg-light hover:text-dark' 
       >Prajwal</Link>
    </div>
  )
}

export default Logo