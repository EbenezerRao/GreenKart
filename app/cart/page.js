'use client';

import { useCartStore } from '@/store/cartStore';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 
import ProtectedRoute from '@/app/componets/ProtectedRoute';

export default function CartPage() {
    const router = useRouter(); // ✅ Initialize router
    const { cart, removeFromCart, updateQuantity, getTotal, clearCart } = useCartStore();
    const totalPrice = getTotal();

    const handleCheckout = () => {
        router.push('/checkout');
    };

    return (
        <ProtectedRoute>
        <div className="min-h-screen bg-gradient-to-br from-[#ecfdf5] to-[#d1fae5] p-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="museo text-4xl font-bold text-center mb-10 text-green-700 transition-opacity duration-500">
                    🛒 Your Cart
                </h1>

                {cart.length === 0 ? (
                    <div className="museo text-center text-gray-500 text-xl">
                        Your cart is empty. <br />
                        <Link
                            href="/"
                            className="museo text-green-600 hover:underline font-semibold"
                        >
                            Continue shopping →
                        </Link>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="md:col-span-2 space-y-6">
                            {cart.map((item) => (
                                <div
                                key={item.slug}
                                className="flex items-center bg-white rounded-xl shadow-md p-4 transition-transform duration-300 ease-in-out hover:scale-[1.02]"
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={100}
                                        height={100}
                                        className="rounded-xl object-cover border border-gray-100"
                                        />
                                    <div className="ml-4 flex-1">
                                        <h2 className="museo text-xl font-semibold text-gray-800">
                                            {item.name}
                                        </h2>
                                        <p className="museo text-green-600 text-lg">{item.price}</p>
                                        <div className="flex items-center mt-2 gap-2">
                                            <label className="museo text-sm text-gray-600">Qty:</label>
                                            <input
                                                type="number"
                                                min="1"
                                                value={item.quantity}
                                                onChange={(e) =>
                                                    updateQuantity(item.slug, parseInt(e.target.value))
                                                }
                                                className="museo w-16 border border-gray-300 rounded px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-green-300"
                                                />
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.slug)}
                                        className="museo text-red-500 font-semibold ml-4 hover:underline"
                                        >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="bg-white shadow-lg rounded-2xl p-6 sticky top-10">
                            <h3 className="museo text-2xl font-bold mb-4 text-green-700">Order Summary</h3>
                            <p className="museo text-gray-700 mb-2">Subtotal: ₹{totalPrice}</p>
                            <p className="museo text-gray-700 mb-4">Shipping: <span className="text-green-600 font-semibold">Free</span></p>
                            <p className="museo text-xl font-bold text-green-800">Total: ₹{totalPrice}</p>

                            <button
                                onClick={clearCart}
                                className="museo w-full mt-6 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 shadow hover:shadow-lg transition-all"
                                >
                                Clear Cart
                            </button>

                            <button
                                onClick={handleCheckout} // ✅ Hooking up the navigation
                                className="museo w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 shadow hover:shadow-lg transition-all"
                                >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </ProtectedRoute>
    );
}
