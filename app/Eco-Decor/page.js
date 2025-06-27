import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from '../Eco-Decor/components/HeroSection'
import Sidebar from '../Personal-Care/components/SideBar'
import ProductGrid from '../Eco-Decor/components/ProductGrid'
import SectionDivider from '../componets/SectionDivider'
import NewsLetter from '../Personal-Care/components/NewsLetterPC'
import Footer from '../componets/Footer'
import CopyRight from '../componets/CopyRight'
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
            <CopyRight/>
        </div>
    )
}

export default page
