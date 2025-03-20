import React from 'react'
import Navbar from './Navbar'
import MailForm from './MailForm'

const Hero = () => {
    return (
        <div className='relative'>
            <img className='w-full h-full' src="/hero-bg.jpg" alt="" />
            <div className='absolute top-0 left-0 w-full h-full bg-[#000000b2]'>
                <Navbar />
                <div className='container mx-auto px-4 flex flex-col items-center justify-center text-center text-white my-35 max-h-[60vh]'>
                    <h1 className='text-5xl font-extrabold'>Unlimited movies,<br/> TV shows, and more</h1>
                    <h4 className='text-xl font-semibold my-5'>Starts at Rs 250. Cancel anytime.</h4>
                    <MailForm />
                </div>
            </div>
        </div>
    )
}

export default Hero