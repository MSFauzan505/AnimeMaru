import React from 'react'
import logo from '../../assets/images/logo.png'

function Logo() {
    return (
        <div className='flex items-center'>
            <img src={logo} className='w-[60px] md:w-[80px] object-cover' />
            <div className='flex flex-col justify-center items-center text-white font-bold text-xl md:text-2xl font-sans'>
                <span className='text-red-400'>MARU</span>
                <span className='bg-red-400 px-1.5 rounded py-1'>NIME</span>
            </div>
        </div>
    )
}

export default Logo