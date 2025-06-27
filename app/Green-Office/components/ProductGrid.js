'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import greenofficeData from '@/data/greenofficeData';

const ProductGrid = () => {
    const visibleProducts = greenofficeData.slice(0, 40); // Only show 3 rows (5 per row on large screens)

    return (
        <section className="py-10 px-4 md:px-12 bg-[#f9f9f9]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                    {visibleProducts.map((product) => (
                        <Link
                            key={product.id}
                            href={`/Green-Office/${product.slug}`}
                            className="overflow-hidden hover:scale-105 transition-all duration-325 ease-in block"
                        >
                            <div className="relative aspect-square w-full">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={221}
                                    height={210}
                                    className="object-cover rounded-3xl shadow-lg"
                                />
                            </div>
                            <div className="p-3 hover:scale-101 transition-all duration-350 ease-in">
                                <h3 className="outfit font-semibold lg:text-[24px] md:text-base text-[#207744]">
                                    {product.name}
                                </h3>
                                <p className="outfit font-semibold lg:text-[24px] md:text-base text-[#207744]">
                                    {product.price}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
