"use client";
import React from 'react';

const CopyRight = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="w-full bg-[#1B593D] flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-12 py-3 md:py-5 space-y-2 md:space-y-0">
            <div className="text-center md:text-left text-white mont font-normal text-sm sm:text-base md:text-lg">
                © {new Date().getFullYear()} GreenKart. Built with care for the planet
            </div>

            <button
                onClick={scrollToTop}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1.5 px-4 rounded text-sm md:text-base transition-all duration-300"
                aria-label="Back to top"
            >
                Back to Top ↑
            </button>
        </div>
    );
};

export default CopyRight;
