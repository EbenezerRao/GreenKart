'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Search, User, ShoppingCart } from 'lucide-react';
import SignOutButton from './SignOutButton';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        setIsMounted(true);
    }, [menuOpen]);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Products", href: "#products" },
        { name: "Cart", href: "/cart" },
        { name: "Account", href: "/auth/signup" },
    ];

    return (
        <>
            <div className="relative flex justify-between items-center px-4 sm:px-6 lg:px-12 h-[70px] sm:h-[77px] w-full bg-[#D8D8D8]">
                <div className='lg:hidden z-50'>
                    <button onClick={() => setMenuOpen(!menuOpen)} aria-label='Toggle Menu'>
                        {menuOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>

                <div className='hidden lg:flex items-center space-x-10'>
                    {navItems.map((item) =>
                        item.href.startsWith('#') ? (
                            <a key={item.name} href={item.href}>
                                <div className="group relative">
                                    <button className='museo text-black text-[24px] hover:text-green-700 transition-all duration-400'>
                                        {item.name}
                                    </button>
                                    <span className='absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-250 group-hover:w-full'></span>
                                </div>
                            </a>
                        ) : (
                            <Link key={item.name} href={item.href}>
                                <div className="group relative">
                                    <button className='museo text-black text-[24px] hover:text-green-700 transition-all duration-400'>
                                        {item.name}
                                    </button>
                                    <span className='absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-250 group-hover:w-full'></span>
                                </div>
                            </Link>
                        )
                    )}

                    {/* 👇 Sign Out button in desktop nav */}
                    <div className="ml-4">
                        <SignOutButton />
                    </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={350}
                        height={350}
                        priority
                    />
                </div>

                <div className="ml-auto flex items-center space-x-4 sm:space-x-6">
                    <Link href={"/"}>
                        <Search className="w-6 h-6 sm:w-[32px] sm:h-[32px] hover:text-green-700 transition-all" />
                    </Link>
                    <Link href={"/cart"}>
                        <ShoppingCart className="w-6 h-6 sm:w-[32px] sm:h-[32px] hover:text-green-700 transition-all" />
                    </Link>
                    <Link href={"/auth"}>
                        <User className="w-6 h-6 sm:w-[32px] sm:h-[32px] hover:text-green-700 transition-all" />
                    </Link>
                </div>
            </div>

            {isMounted && (
                <>
                    <div className={`fixed top-0 left-0 h-full w-[75%] sm:w-[60%] bg-[#D8D8D8] z-40 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}>
                        <div className="flex flex-col px-6 py-6 space-y-6">
                            <button onClick={() => setMenuOpen(false)} className="self-end text-xl text-black" aria-label='Close Menu'>
                                ✕
                            </button>
                            {navItems.map((item) =>
                                item.href.startsWith('#') ? (
                                    <a key={item.name} href={item.href} onClick={() => setMenuOpen(false)}>
                                        <p className='museo text-black text-lg hover:text-green-700 transition-all duration-300'>
                                            {item.name}
                                        </p>
                                    </a>
                                ) : (
                                    <Link key={item.name} href={item.href} onClick={() => setMenuOpen(false)}>
                                        <p className='museo text-black text-lg hover:text-green-700 transition-all duration-300'>
                                            {item.name}
                                        </p>
                                    </Link>
                                )
                            )}

                            {/* 👇 Sign Out in Mobile Menu */}
                            <SignOutButton />
                        </div>
                    </div>
                    {menuOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-30 z-30 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
                    )}
                </>
            )}
        </>
    );
};

export default Navbar;
