import React from 'react'
import { HiHome } from "react-icons/hi2"; 
import { FaTasks } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex flex-col place-content-center gap-5 ml-4 fixed left-0 right-0 w-10 h-screen '>
            <div className='cursor-pointer'>
                <NavLink to='/'>
                    <HiHome size={40} color='#7bf1a8'/>
                </NavLink>
            </div>
            <div className='cursor-pointer'>
                <NavLink to='/todos'>
                    <FaTasks size={35} color='#7bf1a8'/>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar 