'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
    // 🔐 Dummy login state (replace with real auth logic later)
    const isLoggedIn = false;

    return (
        <>
            <div className="relative w-full min-h-screen overflow-hidden">
                <Image
                    src="/Heroimg.png"
                    alt="HeroImage"
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="z-0 opacity-85"
                />

                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-20">
                    <p className="mont text-[#6cc346] font-semibold text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] opacity-80">
                        Eco is New Essential
                    </p>

                    <p className="museo text-white font-semibold text-[64px] sm:text-[80px] md:text-[100px] lg:text-[120px] leading-tight mt-2 opacity-60">
                        Buy What <br />
                        <span>Matters</span>
                    </p>

                    <p className="museo text-white font-semibold text-[24px] sm:text-[18px] md:text-[24px] opacity-75 max-w-[700px] mt-4">
                        Discover eco-friendly essentials for a healthier home and planet
                    </p>

                    {isLoggedIn ? (
                        <a href="#products" className="mt-8">
                            <button className="w-[244px] h-[64px] bg-[#154E31] rounded-[18px] hover:bg-green-800 transition-colors duration-300">
                                <p className="mont font-semibold text-[20px] text-white">🛍️ Shop Now</p>
                            </button>
                        </a>
                    ) : (
                        <Link href="/auth/signup" className="mt-8">
                            <button className="w-[244px] h-[64px] bg-[#154E31] rounded-[18px] hover:bg-green-800 transition-colors duration-300">
                                <p className="mont font-semibold text-[20px] text-white">🛍️ Shop Now</p>
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
};

export default HeroSection;
