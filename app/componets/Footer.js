'use client'
import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faPinterest, faTiktok } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        <footer className="bg-[#3E7B27] text-white py-10 px-6 md:px-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
                <div className="flex-1">
                    <div className="flex items-center space-x-2">
                        <div className="text-[40px] font-bold">🛒<span className="text-white">Green</span>Kart</div>
                    </div>
                    <p className="museo mt-2 text-[24px]">Eco - friendly living <br /> with purpose</p>
                </div>
                <div className="hidden md:block w-px bg-white/40 mx-4"></div>
                <div className="flex-1">
                    <p className="museo font-bold text-[32px] mb-2 text-white">Links</p>
                    <ul className="space-y-1 text-sm">
                        <li className='museo text-[26px] font-normal text-white'><Link href="/">Home</Link></li>
                        <li className='museo text-[26px] font-normal text-white'><Link href="/products">Products</Link></li>
                        <li className='museo text-[26px] font-normal text-white'><Link href="/cart">Cart</Link></li>
                    </ul>
                </div>
                <div className="hidden md:block w-px bg-white/40 mx-4"></div>
                <div className="flex-1">
                    <p className="museo font-bold text-[32px] mb-2 text-white">Support</p>
                    <ul className="space-y-1 text-sm">
                        <li className='museo text-[26px] font-normal text-white'><Link href="/contact">Contact Us</Link></li>
                        <li className='museo text-[26px] font-normal text-white'><Link href="/shipping">Shipping & Returns</Link></li>
                        <li className='museo text-[26px] font-normal text-white'><Link href="/privacy">Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className="hidden md:block w-px bg-white/40 mx-4"></div>
                <div className="flex-1">
                    <p className="museo font-bold text-[32px] mb-2 text-white">Connect</p>
                    <div className="flex space-x-4 mt-2">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
                            <FontAwesomeIcon icon={faInstagram} className="text-[54px] hover:scale-110 transition" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                            <FontAwesomeIcon icon={faFacebook} className="text-[54px] hover:scale-110 transition" />
                        </a>
                        
                        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
                            <FontAwesomeIcon icon={faPinterest} className="text-[54px] hover:scale-110 transition" />
                        </a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition">
                            <FontAwesomeIcon icon={faTiktok} className="text-[54px] hover:scale-110 transition" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
