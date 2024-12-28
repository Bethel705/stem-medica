import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import image from '../assets/logo.png'

export const Navbar = () => {
  const [click, setClick]= useState(false);
  const handleClick = () => {
    setClick(!click);
  }
  const content = <>
  <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-gradient-to;-r from-teal-400 to-blue-500 transition relative z-10 '>
    <ul className='text-center text-xl p-20'>
      <Link spy={true} smooth={true} to='Home'>
      <li className='my-4 py-4 border-b border-indingo-500 hover:bg-indingo-500 hover:rounded'>Home</li>
      </Link>
      <Link spy={true} smooth={true} to='Product'>
      <li className='my-4 py-4 border-b border-indingo-500 hover:bg-indingo-500 hover:rounded'>Product</li>
      </Link>
      <Link spy={true} smooth={true} to='Partnership'>
      <li className='my-4 py-4 border-b border-indingo-500 hover:bg-indingo-500 hover:rounded'>Partnership</li>
      </Link>
      <Link spy={true} smooth={true} to='news'>
      <li className='my-4 py-4 border-b border-indingo-500 hover:bg-indingo-500 hover:rounded'>News</li>
      </Link>
      <Link spy={true} smooth={true} to='footer'>
      <li className='my-4 py-4 border-b border-indingo-500 hover:bg-indingo-500 hover:rounded'>Contact</li>
      </Link>
    </ul>
  </div>
  </>
  return (

    <nav className=' bg-gradient-to-r from-sky-500 from-10% via-emerald-400 via-30% to-emerald-500 to-90% '>
      <div className="h-10vh flex justifay-between z-50 text-white lg:py-5 px-20 py-4 flex-1">
        <div className="flex items-center flex-1">
          <img src={image} alt="" className='w-[180px] h-[60px]'/>
        </div>
        <div className='lg:flex md:flex lg:flex-1 items center justifay-end font-normal hidden '>
          <div className='flex-10'>
          <ul className='flex gap-8 mr-16 text-[18px] py-4'>
            <Link spy={true} smooth={true} to='Home'>
            <li className='hover:text-fuchsia-600 transition hover:border-b-2 border-blue-900 hover:border-fuchsia-600 cursor-pointer'>Home</li>
            </Link>
            <Link spy={true} smooth={true} to='Product'>
            <li className='hover:text-fuchsia-600 transition hover:border-b-2 border-blue-900 hover:border-fuchsia-600 cursor-pointer'>Product</li>
            </Link>
            <Link spy={true} smooth={true} to='Partnership'>
            <li className='hover:text-fuchsia-600 transition hover:border-b-2 border-blue-900 hover:border-fuchsia-600 cursor-pointer'>Partnership</li>
            </Link>
            <Link spy={true} smooth={true} to='news'>
            <li className='hover:text-fuchsia-600 transition hover:border-b-2 border-blue-900 hover:border-fuchsia-600 cursor-pointer'>News</li>
            </Link>
            <Link spy={true} smooth={true} to='footer'>
            <li className='hover:text-fuchsia-600 transition hover:border-b-2 border-blue-900 hover:border-fuchsia-600 cursor-pointer'>Contact</li>
            </Link>
          </ul>
    </div>
        </div>
        <div>
          {click && content}

        </div>
        <button className='block sm:hidden transition' onClick={handleClick}>
          {click ? <FaTimes/> : <CiMenuFries/>}
        </button>
      </div>
    </nav>
  )
}
