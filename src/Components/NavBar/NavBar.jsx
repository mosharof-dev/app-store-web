'use client';
import React from 'react';
import navLogo from '../../assets/logo.png'; 
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
   
    const pathName = usePathname();

    const navLinksData = [
        { label: 'Home', href: '/' },
       { label: 'Apps', href: '/apps' },
        { label: 'Installation', href: '/installation' },
        { label: 'Dashboard', href: '/dashboard' },
    ];

    const navLinks = (
        <>
            {navLinksData.map(link => (
                <li key={link.href} className="relative">
                    <Link 
                        className={`font-medium w-full ${pathName === link.href ? 'text-primary' : 'text-neutral-700'}`} 
                        href={link.href}
                    >
                        {link.label}
                        
                        {/* Active Indicator */}
                        {pathName === link.href && (
                            <span className="absolute left-0 -bottom-1.5 h-0.5 w-full bg-primary rounded-full hidden lg:block"></span>
                        )}
                    </Link>
                </li>
            ))}
        </>
    );

    return (
        <nav className='sticky top-0 z-10 bg-base-100 shadow-sm '>
            <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center h-16">
            
            {/* Left Section: Logo and Brand Only */}
            <div className="navbar-start">
               
                <Link href="/" className="flex items-center gap-2.5">
                    <Image
                        src={navLogo} 
                        alt="App Store Web Logo" 
                        className="rounded-full w-10 h-10 object-cover" 
                    />
                    <span className="font-bold text-2xl tracking-tight text-primary">HERO.IO</span>
                </Link>
            </div>

            {/* Center Section: Navigation Links (Desktop Only) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4 font-semibold">
                    {navLinks}
                </ul>
            </div>

            {/* Right Section: Action Button & Mobile Dropdown */}
            <div className="navbar-end ">
                
                {/* Contribute Button (Desktop Only) */}
                <Link href="https://github.com/mosharof-dev" target="_blank" className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-[#7F56D9] rounded text-white  font-semibold text-sm hover:bg-primary/90 transition duration-150">
                    <FaGithub className="text-lg" />
                    Contribute
                </Link>

                {/* Mobile Dropdown Menu (Mobile Only) */}
                <div className="dropdown dropdown-end lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost p-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /> 
                        </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content mt-4 z-50 p-3 shadow-lg bg-base-100 rounded-2xl w-56 space-y-2 border border-base-200"
                    >
                     
                        {navLinks}
                        
                        
                       <li> <div className="divider my-1"></div></li>
                        
                        {/* Mobile Contribute Button inside the menu */}
                        <li>
                            
                            <Link href="https://github.com/mosharof-dev" className="flex justify-center items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-lg font-semibold w-full hover:bg-primary/90 text-center active:text-white">
                                <FaGithub className="text-lg" />
                                Contribute
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
        </nav>
    );
};

export default NavBar;