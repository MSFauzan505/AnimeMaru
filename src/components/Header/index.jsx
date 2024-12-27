import React, { useState } from 'react'
import { HiHome, HiPlus, HiStar, HiFilm, HiTv } from "react-icons/hi2";
import { HiSearch, HiDotsVertical } from "react-icons/hi";
import HeaderItems from './HeaderItems';
import Logo from './Logo';
import profile from '../../assets/images/profile.png'
import SideBar from './SideBar';

function NavigationMenu({ onLogOut }) {
    const username = localStorage.getItem('username')
    const [tonggle, setToggle] = useState(false)
    const navigation = [
        { name: 'HOME', icon: HiHome, path: '/' },
        { name: 'POPULAR', icon: HiStar, path: '/popular' },
        { name: 'UPCOMING', icon: HiTv, path: '/upcoming' },
        { name: 'WATCHLIST', icon: HiPlus, path: '/watchlist' },
        { name: 'SEARCH', icon: HiSearch, }
    ]

    return (
        <div className='sticky top-0 z-50 flex items-center bg-slate-800 shadow-md justify-between '>
            <div className='flex items-center justify-between px-4 py-5 gap-3 container mx-auto'>
                <div className='flex items-center gap-4 sm:gap-6 md:gap-8'>
                    <Logo />
                    <div className='hidden sm:flex items-center gap-10'>
                        <div className='hidden lg:flex gap-8'>
                            {navigation.map((item, index) => {
                                return (
                                    <HeaderItems path={item.path} key={index} name={item.name} Icon={item.icon} />
                                )
                            })}
                        </div>
                        <div className='flex lg:hidden gap-8'>
                            {navigation.map((item, index) => {
                                return (
                                    index < 3 && <HeaderItems path={item.path} key={index} name={item.name} Icon={item.icon} />
                                )
                            })}
                        </div>
                        <div className='lg:hidden' onClick={() => setToggle(!tonggle)}>
                            <HeaderItems name={''} Icon={HiDotsVertical} />
                            {tonggle ? <div className='absolute my-3 flex flex-col gap-3 bg-slate-900 border-slate-500 rounded py-2 px-4 border'>
                                {navigation.map((item, index) => {
                                    return (
                                        index > 2 && <HeaderItems path={item.path} key={index} name={item.name} Icon={item.icon} />
                                    )
                                })}
                            </div> : null}
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='hidden md:flex text-white flex-col items-end gap-1'>
                        <p className='text-lg font-semibold'>{username}</p>
                        <button type='submit' className='font-light text-red-400 hover:text-red-500' onClick={onLogOut}>Log Out</button>
                    </div>
                    <img src={profile} className='hidden md:block cursor-pointer' />
                </div>

                <SideBar navigation={navigation} onLogOut={onLogOut} username={username}/>
            </div>
        </div>
    )
}

export default NavigationMenu