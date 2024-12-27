import React from 'react'
import { Link } from 'react-router-dom';

function FormLayout({children, linkRoute, isLoginPage}) {
    return (
        <div className='container mx-auto flex justify-center items-center h-screen'>
            <div className='bg-slate-700 p-4 rounded w-11/12 sm:w-96 py-10'>
                <h1 className='text-white text-center mb-4 text-2xl font-semibold'>Selamat Datang Di <span className='text-red-400'>AniMaru</span></h1>
                {children}
                <p className='my-2 text-white'>
                    {isLoginPage ? 'Sudah punya akun?' : 'Belum punya akun?'}
                    <Link to={linkRoute} className='text-red-400 hover:text-red-500'>
                        {isLoginPage ? ' Sign in' : ' Sign up'}
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default FormLayout