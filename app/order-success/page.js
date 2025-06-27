'use client';

import Link from 'next/link';
import Lottie from 'lottie-react';
import successAnimation from '../assets/loader/order-success.json';
import { useEffect } from 'react';
import { useCartStore } from '@/store/cartStore';

export default function OrderSuccess() {
    const { clearCart } = useCartStore();

    useEffect(() => {
        clearCart();
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-100 to-white px-4 py-10 text-center">
            <div className="w-80 sm:w-96 mb-6">
                <Lottie animationData={successAnimation} loop={false} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-green-700 mb-4 mont">
                Thank you for your order!
            </h1>
            <p className="text-lg text-gray-700 mb-6">
                We've received your order and it's now being processed. You'll hear from us soon.
            </p>
            <Link
                href="/"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
            >
                Continue Shopping
            </Link>
        </div>
    );
}
