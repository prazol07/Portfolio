import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

const about = () => {
  return (
    <>
        <Head>
            <title>
                Prajwal | About
            </title>
                <meta name="description" content="anydescription" /> 
        </Head>
        {/* <main className='flex w-full flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="Passion For Coding" className='text-4xl'></AnimatedText> 
            </Layout>
        </main> */}
         <main className='flex  w-full flex-col items-center text-dark pt-8'>
        <Layout className='pt-16'>
            <AnimatedText text="Coding with passion " />
        </Layout>
       </main>
    </>
  )
}

export default about