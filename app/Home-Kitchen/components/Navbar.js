"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Search, User, ShoppingCart } from "lucide-react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="w-full bg-[#D8D8D8] shadow-md fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-[108px]">
                    {/* Mobile hamburger + logo */}
                    <div className="flex items-center w-full sm:w-auto">
                        {/* Hamburger */}
                        <button
                            onClick={toggleMenu}
                            className="sm:hidden mr-4 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? (
                                <X className="w-8 h-8 text-black" />
                            ) : (
                                <Menu className="w-8 h-8 text-black" />
                            )}
                        </button>

                        {/* Logo */}
                        <Link href="/" className="mx-auto sm:mx-0">
                            <Image
                                src="/logo1.png"
                                alt="logo"
                                width={200}
                                height={200}
                                className="object-contain max-h-[90px]"
                            />
                        </Link>
                    </div>

                    {/* Desktop Nav Links */}
                    <div className="hidden sm:flex sm:items-center sm:space-x-6 ml-10 whitespace-nowrap">
                        {[
                            { name: "Home & Kitchen", href: "/Home-Kitchen" },
                            { name: "Personal Care", href: "/Personal-Care" },
                            { name: "Laundary Essentials", href: "/Laundry-Essentials" },
                            { name: "Eco Decor", href: "/Eco-Decor" },
                            { name: "Green Office", href: "/Green-Office" },
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative museo font-normal text-[20px] text-black hover:text-green-700 transition-all duration-300 px-2 py-1"
                            >
                                <span className="absolute inset-0 rounded-md border-2 border-transparent hover:border-green-700 pointer-events-none"></span>
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center space-x-4 sm:space-x-6 pl-6">
                        <Link href={"/"}>
                            <Search className="w-6 h-6 sm:w-8 sm:h-8 hover:text-green-700 transition-colors" />
                        </Link>
                        <Link href={"/cart"}>
                            <ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8 hover:text-green-700 transition-colors" />
                        </Link>
                        <Link href={"/auth"}>
                            <User className="w-6 h-6 sm:w-8 sm:h-8 hover:text-green-700 transition-colors" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            {menuOpen && (
                <div className="sm:hidden bg-[#D8D8D8] border-t border-gray-300">
                    <div className="flex flex-col px-4 py-4 space-y-3">
                        {[
                            { name: "Home & Kitchen", href: "/Home-Kitchen" },
                            { name: "Personal Care", href: "/Personal-Care" },
                            { name: "Laundary Essentials", href: "/Laundary-Essentials" },
                            { name: "Eco Decor", href: "/Eco-Decor" },
                            { name: "Green Office", href: "/Green-Office" },
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="museo font-normal text-lg text-black hover:text-green-700 transition-all duration-300 px-3 py-2 rounded-md border-2 border-transparent hover:border-green-700"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
