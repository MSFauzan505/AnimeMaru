import React from 'react'
import { useState } from 'react'
import HeaderItems from './HeaderItems'
import { FiAlignJustify } from "react-icons/fi";
import profile from '../../assets/images/profile.png'

function SideBar({ navigation, onLogOut, username }) {
  const [tonggle2, setToggle2] = useState(false)

  return (
    <div className='md:hidden text-4xl'>
      <HeaderItems Icon={FiAlignJustify} name={''} onclick={() => setToggle2(!tonggle2)} />
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-slate-900 shadow-lg z-50 
                        ${tonggle2 ? 'translate-x-0' : 'translate-x-full'}
                        transition-transform duration-300 ease-in-out`}
      >
        <div className='flex flex-col p-5 gap-5 '>
          <button
            className='self-end text-4xl text-white'
            onClick={() => setToggle2(false)}
          >
            &times;
          </button>
          <div className='flex justify-center flex-col'>
            <img src={profile} className='block cursor-pointer w-20 mx-auto' />
            <div className='flex text-white flex-col items-center gap-1'>
              <p className='text-xl font-semibold'>{username}</p>
              <button type='submit' className='font-light text-[20px] text-red-400 hover:text-red-500' onClick={onLogOut}>Log Out</button>
            </div>
          </div>
          {navigation.map((item, index) => (
            <HeaderItems path={item.path} key={index} name={item.name} Icon={item.icon} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SideBar