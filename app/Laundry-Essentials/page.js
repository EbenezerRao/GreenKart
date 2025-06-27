import React from 'react'
import Navbar from '../Home-Kitchen/components/Navbar'
import HeroSection from '../Laundry-Essentials/components/HeroSection'
import Sidebar from '../Home-Kitchen/components/Sidebar'
import ProductGrid from '../Laundry-Essentials/components/ProductGrid'
import NewsLetter from '../Laundry-Essentials/components/NewsLetterLE'
import Footer from '../componets/Footer'
import CopyRight from '../componets/CopyRight'
import SectionDivider from '../componets/SectionDivider'

const page = () => {
    return (
        <div className='w-full h-full'>
            <Navbar/>
            <HeroSection/>
            <div className='lg:flex'>
                <Sidebar/>
                <ProductGrid/>
            </div>
            <SectionDivider/>
            <NewsLetter/>
            <SectionDivider/>
            <Footer/>
            <SectionDivider/>
            <CopyRight />
        </div>
    )
}

export default page
