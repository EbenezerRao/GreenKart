'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <div>
            <div className="md:hidden flex items-center justify-between px-4 py-3 shadow bg-[#d9d9d9]">
                <h1 className="text-lg font-semibold">Filters</h1>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
            <aside
                className={`
                    fixed lg:top-[0px] top-[110px] left-0 h-full w-[240px] bg-[#d9d9d9] p-6 shadow-md z-40 transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                    md:relative md:translate-x-0 md:block
                    `}
                    >
                <h2 className="mont sm:font-sans text-[50px] font-regular mb-6 hidden md:block hover:text-[#2e8b57] hover:scale-101 transition-all duration-350 ease-in">Filters</h2>
                <div className="mb-6">
                    <h3 className="mont text-md font-medium mb-2">Material Type</h3>
                    <div className="flex flex-col gap-2 text-sm text-gray-700 bg-[#d9d9d9]">
                        <label className="mont flex items-center gap-2">
                            <input type="checkbox" className="accent-green-600" />
                            Bamboo
                        </label>
                        <label className="mont flex items-center gap-2">
                            <input type="checkbox" className="accent-green-600" />
                            Stainless Steel
                        </label>
                        <label className="mont flex items-center gap-2">
                            <input type="checkbox" className="accent-green-600" />
                            Wood
                        </label>
                    </div>
                </div>
                <div>
                    <h3 className="mont text-md font-medium mb-2">Eco Tag / Reliability</h3>
                    <div className="flex flex-col gap-2 text-sm text-gray-700">
                        <label className="mont flex items-center gap-2">
                            <input type="checkbox" className="accent-green-600 " />
                            Compostable
                        </label>
                        <label className="mont flex items-center gap-2">
                            <input type="checkbox" className="accent-green-600" />
                            Reusable
                        </label>
                        <label className="mont flex items-center gap-2">
                            <input type="checkbox" className="accent-green-600" />
                            Biodegradable
                        </label>
                    </div>
                </div>
            </aside>

            {isOpen && (
                <div
                className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
                onClick={() => setIsOpen(false)}
                ></div>
            )}
            </div>
        </>
    );
};

export default Sidebar;
