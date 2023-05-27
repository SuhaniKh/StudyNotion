import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/Logo.svg"
import { toast } from 'react-hot-toast'

const NavBar = ({isLoggedIn , setLoggedIn}) => {
  return (
    <div className='flex justify-evenly items-center w-[11/12] max-w-[1160] py-4 '>
      <Link to = "/">
        <img src = {Logo} alt = "logo" className='mt-1' width={160} height={32} loading='lazy'/>
      </Link>

      <nav className='mt-2'>
        <ul className='flex text-white gap-x-6'>
            <Link to = "/">Home</Link>
            <Link to = "/">About</Link>
            <Link to = "/">Contact</Link>
        </ul>
      </nav>

      <div className='mt-2 flex gap-x-4 items-center'>
        {   !isLoggedIn&&
            <Link to = "/LogIn">
                <button className='bg-slate-800 border border-slate-700 rounded-[8px] px-[16px] py-[6px] text-white'>Log In</button>
            </Link>
        }
        {   !isLoggedIn&&
            <Link to = "/SignUp">
                <button className='bg-slate-800 border border-slate-700 rounded-[8px] px-[16px] py-[6px] text-white'>Sign Up</button>
            </Link>
        }
        {   isLoggedIn&&
            <Link to = "/">
                <button
                className='bg-slate-800 border border-slate-700 rounded-[8px] px-[16px] py-[6px] text-white'
                onClick={()=>{
                    setLoggedIn(false);
                    toast.success("Logged Out");
                }}>Log Out</button>
            </Link>
        }
        {   isLoggedIn&&
            <Link to = "/Dashboard">
                <button
                className='bg-slate-800 border border-slate-700 rounded-[8px] px-[16px] py-[6px] text-white'>Dashboard</button>
            </Link>
        }
      </div>

    </div>
  )
}

export default NavBar

