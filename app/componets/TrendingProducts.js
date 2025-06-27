'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useScrollFade from './hooks/useScrollFade'

const TrendingProducts = () => {
    const [ref1, visible1] = useScrollFade()
    const [ref2, visible2] = useScrollFade()
    const [ref3, visible3] = useScrollFade()

    return (
        <div className="w-full bg-[#f5f5f5] py-10 px-4">
            <div className="flex flex-col items-center justify-center text-center">
                <p className="mont text-[40px] md:text-[75px] font-normal text-black mt-3">Eco Picks for Summer</p>
                <p className="mont text-[16px] md:text-[20px] font-normal text-black mb-9">
                    Handpicked seasonal must-haves to keep you fresh & sustainable
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
                {/* Card 1 */}
                <Link href="/products/coconut-bowl-set" className="block max-w-[388px] w-full">
                    <div
                        ref={ref1}
                        className={`bx relative rounded-[20px] overflow-hidden cursor-pointer aspect-[388/339] bg-gray-200 transform transition-transform duration-300 ease-in-out hover:scale-105 ${
                            visible1 ? 'fade-in' : 'fade-out'
                        }`}
                    >
                        <Image
                            src="/ecopickcocobowlset.jpg"
                            alt="ecopickcoconutbowls"
                            fill
                            className="object-cover rounded-[20px]"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-[20px]">
                            <p className="text-white lg:text-[50px] md:text-[35px] sm:text-[30px] mont pl-4">Coconut Bowl Set</p>
                        </div>
                    </div>
                </Link>

                {/* Card 2 */}
                <Link href="/products/bath-loofah" className="block max-w-[388px] w-full">
                    <div
                        ref={ref2}
                        className={`bx relative rounded-[20px] overflow-hidden cursor-pointer aspect-[388/339] bg-gray-200 transform transition-transform duration-300 ease-in-out hover:scale-105 ${
                            visible2 ? 'fade-in' : 'fade-out'
                        }`}
                    >
                        <Image
                            src="/ecopickloofah.jpg"
                            alt="ecopickbathloofah"
                            fill
                            className="object-cover rounded-[20px]"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-[20px] ">
                            <p className="text-white lg:text-[50px] md:text-[35px] sm:text-[30px] mont pl-4">Natural Bath Loofah</p>
                        </div>
                    </div>
                </Link>

                {/* Card 3 */}
                <Link href="/products/eco-water-bottle" className="block max-w-[388px] w-full">
                    <div
                        ref={ref3}
                        className={`bx relative rounded-[20px] overflow-hidden cursor-pointer aspect-[388/339] bg-gray-200 transform transition-transform duration-300 ease-in-out hover:scale-105 ${
                            visible3 ? 'fade-in' : 'fade-out'
                        }`}
                    >
                        <Image
                            src="/ecopickecobottle.jpg"
                            alt="ecopickwaterbottle"
                            fill
                            className="object-cover rounded-[20px]"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-[20px]">
                            <p className="text-white lg:text-[50px] md:text-[35px] sm:text-[30px] mont pl-4">Eco Water Bottle</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default TrendingProducts
