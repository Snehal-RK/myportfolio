"use client";

import Link from 'next/link'
import Image from 'next/image';
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
        title: "About",
        path: "#about-section",
    },

    {
        title: "Projects",
        path: "#project-section",
    },

    {
        title: "Contact",
        path: "#email-section",
    }
]

const Navbar = () => {

    const [ navbarOpen, setNavbarOpen ] = useState(false);
    
  return (
    
    <nav className='border border-transparent border-b-[#33353f] fixed mx-auto top-0 left-0 right-0 z-10 bg-[#121212] opacity-100'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4'>
            
            <Link href={'/'} className='text-2xl md:text-5xl text-white font-semibold'>
                <img 
                    src="/Images/logo.png"
                    alt='Logo'
                    width={80}
                    height={80}
                />
            </Link>
            
            <div className='mobile-menu block md:hidden'>
                {
                    // Check if navbar is open
                    ! navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <Bars3Icon className='w-4 h-4' />
                        </button>
                    ) : (       // Else
                        <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <XMarkIcon className='w-4 h-4' />
                        </button>
                    )
                }
            </div>

            <div className='menu hidden md:block md:w-auto' id="navbar">
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    {
                        navLinks.map((link, index) => (
                            <li key={index}> 
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>

        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}


    </nav>

)
}

export default Navbar
