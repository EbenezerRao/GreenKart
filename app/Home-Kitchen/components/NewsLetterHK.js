import React from 'react';

const NewsLetter = () => {
    return (
        <div className="w-full bg-[url('/footer.png')] bg-cover bg-center py-16 px-6 flex justify-center items-center">
            <div className="bg-white/90 rounded-2xl shadow-md p-8 sm:p-12 w-[1048px] flex flex-col justify-center items-center">
                <p className="mont lg:text-[32px] sm:text-3xl font-normal mb-4 text-black">
                    Be the Change, Shop the Change
                </p>
                <p className="mont lg:text-[26px] text-gray-800 mb-1">
                    Get exclusive tips, early access to green launches, and more.
                </p>
                <p className="mont lg:text-[26px] text-gray-800 mb-6">
                    Stay updated with the latest in eco-living.
                </p>

                <form className="flex flex-col sm:flex-row gap-4 justify-start items-center">
                    <input type="email" placeholder="Your e-mail" className="w-full sm:w-[300px] px-4 py-3 border border-black rounded-md text-base focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-green-800 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewsLetter;
