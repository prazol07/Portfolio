import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
        <Layout className='py-10 flex items-center justify-between'>
            <span>{new Date().getFullYear} &copy; All Rights Reserved.</span>
            <div>Build with &#9825; 
                <Link href="/"> Passion</Link>
            </div>
            <Link href="mailto:prazolupreti@gmail.com">Contact Me</Link>
        </Layout>
    </footer>
  )
}

export default Footer