import React from 'react'
import Navbar from '../Personal-Care/components/Navbar'
import HeroSection from '../Personal-Care/components/HeroSection'
import Sidebar from '../Personal-Care/components/SideBar'
import ProductGrid from '../Personal-Care/components/ProductGrid'
import SectionDivider from '../componets/SectionDivider'
import NewsLetter from '../Personal-Care/components/NewsLetterPC'
import Footer from '../componets/Footer'
import CopyRight from '../componets/CopyRight'
const page = () => {
    return (
        <div className='h-full w-full'>
            <Navbar/>
            <HeroSection/>
            <div className='lg:flex'>
                <Sidebar/>
                <ProductGrid/>
            </div>
            <NewsLetter/>
            <Footer/>
            <CopyRight/>
        </div>
    )
}

export default page
