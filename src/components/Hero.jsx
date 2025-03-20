import React from 'react'
import Navbar from './Navbar'
import MailForm from './MailForm'

const Hero = () => {
    return (

        <div className='w-full h-screen bg-cover bg-center' style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/hero-bg.jpg')" }}>
            <Navbar />
            <div className='container mx-auto px-4 flex flex-col items-center justify-center text-center text-white my-35 max-h-[60vh]'>
                <h1 className='text-5xl font-extrabold'>Unlimited movies,<br /> TV shows, and more</h1>
                <h4 className='text-xl font-semibold my-5'>Starts at Rs 250. Cancel anytime.</h4>
                <MailForm />
            </div>
        </div>
    )
}

export default Hero