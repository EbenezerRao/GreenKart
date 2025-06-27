import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ExploreProducts = () => {
    return (
        <div id="products" className="w-full bg-[#f5f5f5] py-16 px-4 scroll-mt-0.25">
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="mont text-4xl md:text-6xl font-normal mb-4">Explore Green Essentials</h2>
                <p className="mont text-base md:text-lg font-normal text-gray-700">
                    Carefully chosen for a sustainable lifestyle
                </p>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 max-w-7xl mx-auto">
                <Link href="/Home-Kitchen">
                    <div className="bx relative w-full h-[260px] sm:h-[300px] md:h-[340px] rounded-[20px] overflow-hidden transform hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: '0s' }}>
                        <Image src="/homekitchen.jpg" alt="Home & Kitchen" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/45"></div>
                        <div className="museo absolute inset-0 flex items-center justify-center px-4 text-white sm:text-[30px] lg:text-[64px] md:text-3xl font-medium mont text-center">Home & Kitchen</div>
                    </div>
                </Link>

                <Link href="/Personal-Care">
                    <div className="bx relative w-full h-[260px] sm:h-[300px] md:h-[340px] rounded-[20px] overflow-hidden transform hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        <Image src="/personalcar.jpg" alt="Personal Care" fill className="object-cover rotate-90" />
                        <div className="absolute inset-0 bg-black/45"></div>
                        <div className="museo absolute inset-0 flex items-center justify-center px-4 text-white sm:text-[30px] lg:text-[64px] md:text-3xl font-medium mont text-center">Personal Care</div>
                    </div>
                </Link>

                <Link href="/Laundry-Essentials">
                    <div className="bx relative w-full h-[260px] sm:h-[300px] md:h-[340px] rounded-[20px] overflow-hidden transform hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <Image src="/laundaryessentials.jpg" alt="Laundry Essentials" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/45"></div>
                        <div className="museo absolute inset-0 flex items-center justify-center px-4 text-white sm:text-[30px] lg:text-[64px] md:text-3xl font-medium mont text-center">Laundry Essentials</div>
                    </div>
                </Link>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-12 justify-center max-w-5xl mx-auto px-4">
                <Link href="/Eco-Decor">
                    <div className="bx relative w-full sm:w-[300px] md:w-[386px] h-[260px] sm:h-[300px] md:h-[340px] rounded-[20px] overflow-hidden transform hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <Image src="/ecodecor.jpg" alt="Eco Decor" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/45"></div>
                        <div className="museo absolute inset-0 flex items-center justify-center px-4 text-white sm:text-[30px] lg:text-[64px] md:text-3xl font-medium mont text-center">Eco Decor</div>
                    </div>
                </Link>

                <Link href="/Green-Office">
                    <div className="bx relative w-full sm:w-[300px] md:w-[386px] h-[260px] sm:h-[300px] md:h-[340px] rounded-[20px] overflow-hidden transform hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        <Image src="/greenoffice.jpg" alt="Green Office" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/45"></div>
                        <div className="museo absolute inset-0 flex items-center justify-center px-4 text-white sm:text-[30px] lg:text-[64px] md:text-3xl font-medium mont text-center">Green Office</div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ExploreProducts;
