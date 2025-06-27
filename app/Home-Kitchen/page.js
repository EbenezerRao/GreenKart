import React from 'react'
import Navbar from '../Home-Kitchen/components/Navbar'
import HeroSection from './components/HeroSection'
import Sidebar from './components/Sidebar'
import ProductGrid from './components/ProductGrid'
import NewsLetterHK from './components/NewsLetterHK'
import Footer from '../componets/Footer'
import CopyRight from '../componets/CopyRight'
import SectionDivider from '../componets/SectionDivider'
const page = () => {
    return (
        <div className='h-full w-full'>
            {/* <h2>Home-Kitchen</h2> */}
            <Navbar/>
            <HeroSection/>
            <div className='lg:flex'>
            <Sidebar/>
            <ProductGrid />
            </div>
            <SectionDivider/>
            <NewsLetterHK/>
            <SectionDivider/>
            <Footer/>
            <SectionDivider/>
            <CopyRight/>
        </div>
    )
}

export default page
