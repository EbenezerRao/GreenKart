'use client'

import Image from 'next/image'
import React from 'react'

const HomeKitchenHero = () => {
    return (
        <div className="relative w-full h-[600px] overflow-hidden">
            <Image
                src="/green-office/herosec.jpg"
                alt="Home Kitchen"
                fill
                style={{ objectFit: 'cover',  }}
                className="z-0"
                priority
            />
            <div className="absolute inset-0  bg-white/40" />
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                <p className="text-4xl md:text-6xl leading-tight text-black museo font-semibold lg:text-[100px] mt-16">Green Office<br />Supplies&Products</p>
                <p className="museo text-sm md:text-base mt-6 text-blsck font-semibold lg:text-[22px]">
                    Work Mindfully – 40+ Green Office Essentials to Power Your Day, Sustainably
                </p>
            </div>
        </div>
    )
}

export default HomeKitchenHero