'use client';

import { useParams } from 'next/navigation';
import ecodecorData from '@/data/ecodecorData';
import { useCartStore } from '@/store/cartStore';

import Navbar from '@/app/Home-Kitchen/components/Navbar';
import Footer from '@/app/componets/Footer';
import NewsLetter from '@/app/Home-Kitchen/components/NewsLetterHK'; 
import ProductDetail from '@/app/componets/ProductDetail';
import ProductReviews from '@/app/componets/ProductsReview';
import CopyRight from '@/app/componets/CopyRight';

export default function ProductPage() {
    const { slug } = useParams();
    const addToCart = useCartStore((state) => state.addToCart);

    const product = ecodecorData.find((item) => item.slug === slug);

    if (!product) {
        return (
            <>
                <Navbar />
                <div className="text-center py-20 text-red-600 font-semibold text-xl">
                    🚫 Product not found
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <ProductDetail product={product} addToCart={addToCart} />
            <ProductReviews/>
            <NewsLetter/>            
            <Footer />
            <CopyRight/>
        </>
    );
}
