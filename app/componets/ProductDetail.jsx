"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react"; // ✅ for showing temporary message

export default function ProductDetail({ product, addToCart }) {
    const router = useRouter();
    const [showMessage, setShowMessage] = useState(false); // ✅ state for feedback

    const {
        name,
        price,
        image,
        description = "This eco-conscious product is designed to make your lifestyle more sustainable and Earth-friendly.",
        height = 600,
        width = 600,
    } = product;

    const handleAddToCart = () => {
        addToCart(product);
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 2500); // Hide after 2.5s
    };

    const handleBuyNow = () => {
        addToCart(product);
        router.push("/cart");
    };

    return (
        <div className="relative max-w-7xl mx-auto p-5 grid md:grid-cols-2 gap-8 items-start">
            {showMessage && (
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-green-600/75 text-white px-25 py-5 rounded-[24px] shadow-lg transition-opacity duration-500 ease-in-out z-50 animate-bounce">
                    ✅ Item added to cart!
                </div>
            )}

            <div>
                <Image
                    src={image}
                    alt={name}
                    width={width}
                    height={height}
                    className="rounded-xl object-cover w-full h-auto shadow-md"
                    priority
                />
            </div>
            <div className="flex flex-col gap-4">
                <p className="museo text-[50px] font-bold text-gray-800">{name}</p>
                <p className="museo text-green-700 text-[30px] font-semibold">
                    {price}
                </p>
                <p className="museo text-gray-600 text-[24px] leading-relaxed">
                    {description}
                </p>

                <div className="flex gap-4 mt-6">
                    <button
                        onClick={handleAddToCart}
                        className="museo bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all duration-300"
                    >
                        Add to Cart
                    </button>
                    <button
                        onClick={handleBuyNow}
                        className="museo border border-green-600 text-green-700 px-6 py-2 rounded-lg hover:bg-green-50 transition-all duration-300"
                    >
                        Buy Now
                    </button>
                </div>

                <div className="museo mt-4 flex flex-col gap-2 text-gray-600 text-[18px]">
                    <div className="flex items-center gap-2">
                        <span className="text-green-600">✅</span>
                        <span>Eco-friendly packaging</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-green-600">🚚</span>
                        <span>Free delivery on orders over ₹499</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-green-600">🔁</span>
                        <span>7-day easy returns policy</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-green-600">🪴</span>
                        <span>Every purchase supports sustainability 🌍</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
