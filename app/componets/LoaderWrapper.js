'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import loaderAnimation from "../assets/loader/loader-screen.json";

export default function LoaderWrapperResponsive({ children }) {
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1250); // Same duration as yours

        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <>
            <AnimatePresence mode="wait">
                {loading && (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full h-screen flex flex-col items-center justify-center fixed top-0 left-0 bg-white/90 backdrop-blur-md z-[999]"
                    >
                        <div className="flex flex-col items-center justify-center px-4 text-center">
                            <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72">
                                <Lottie animationData={loaderAnimation} loop autoplay />
                            </div>
                            <p className="text-green-700 text-base sm:text-lg md:text-xl lg:text-2xl mt-2 animate-pulse">
                                Loading GreenKart goodness...
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {children}
            </motion.div>
        </>
    );
}
