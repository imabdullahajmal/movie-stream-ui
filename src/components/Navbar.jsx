import React from 'react'

const Navbar = () => {
    return (
        <div className='flex left-0 w-full justify-between'>
            <div className='mx-30 my-7'>
                    <img className='w-35 h-auto' src="/Logo.svg" alt="Logo" />
            </div>
            <div className='mx-30 my-7'>
                <button className='bg-red-700 text-white px-3 py-1.5 font-semibold rounded-md'>Sign in</button>
            </div>
        </div>
    )
}

export default Navbar