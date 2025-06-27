'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Card = ({ icon, alt, title, desc }) => {
    const [ref, inView] = useInView({
        threshold: 0.2,
    })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='w-full max-w-sm h-auto md:h-[385px] flex flex-col items-center justify-center 
                bg-[#185C2E] rounded-[20px] p-6 text-center shadow-md hover:shadow-2xl 
                transition-all duration-300 ease-in-out hover:bg-[#2e8b57] hover:scale-105 group'
        >
            <Image
                src={icon}
                alt={alt}
                width={64}
                height={64}
                className='mb-4 transition-colors duration-300 group-hover:invert'
            />
            <p className='marg text-[22px] sm:text-[24px] text-white font-normal group-hover:text-black text-center transition-colors duration-300'>
                {title}
            </p>
            <p className='marg text-[18px] sm:text-[20px] text-white font-normal group-hover:text-black text-center transition-colors duration-300 mt-4'>
                {desc}
            </p>
        </motion.div>
    )
}


const OurMission = () => {
    return (
        <div className='w-full bg-[#f5f5f5] py-10 px-4'>
            <div className='flex flex-col items-center justify-center text-center space-y-4'>
                <p className='marg text-[28px] sm:text-[32px] md:text-[40px] font-normal text-black'>
                    Why GreenKart?
                </p>
                <p className='marg text-[20px] sm:text-[24px] md:text-[28px] font-normal text-black'>
                    Eco-conscious shopping, redefined.
                </p>
            </div>

            <div className='flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 mt-10'>
                <Card icon='/dustbin.png' alt='dustbin' title='Sustainable Products' desc='All our items are consciously sourced for minimal environmental impact.' />
                <Card icon='/leaf.png' alt='Leaf' title='Natural & Eco-Friendly' desc='No plastics. No toxins. Just nature’s finest — safe for home and earth.' />
                <Card icon='/earth.png' alt='Earth' title='Planet-First Mission' desc='Every purchase plants a tree and supports green initiatives worldwide.' />
            </div>
        </div>
    )
}

export default OurMission
