import { FaSearch } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import React from 'react'


const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md '>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-slate-500'>jyot</span>
                <span className='text-slate-700'>vasava</span>
            </h1>
            </Link>
            <form className='bg-slate-100 rounded-lg  flex items-center'>
                <input type='text' placeholder='Search' className='bg-transparent focus:outline-none w-24 sm:w-64 ' />
                <FaSearch className='text-slate-600'/>
            </form>
            <ul className='flex gap-3'>
                <Link to='/signup'>
                <li className=' text-slate-700 hover:underline'>Sign Up</li>
                </Link>
                <Link to='/signin'>
                <li className=' text-slate-700 hover:underline'>Sign In</li>
                </Link>
                <Link to='/'>
                <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
                </Link>
                <Link to='/about'>
                 <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
                </Link>
            </ul>
        </div>
    </header>
  )
}

export default Header