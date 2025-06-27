'use client';

import { useCartStore } from '@/store/cartStore';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '../componets/ProtectedRoute';
import axios from 'axios';
import { auth } from '@/firebase/firebaseConfig';

export default function CheckoutPage() {
    const { cart, getTotal, clearCart } = useCartStore();
    const router = useRouter();
    const [userEmail, setUserEmail] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone: '',
        payment: 'cod',
    });

    const [loading, setLoading] = useState(false);
    const total = getTotal();

    // ✅ Get logged-in user's email
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) setUserEmail(user.email);
        });
        return () => unsubscribe();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.address || !formData.phone) {
            return alert('❗Please fill all the fields');
        }

        setLoading(true);

        const orderData = {
            userEmail,
            items: cart.map(item => ({
                productId: item.slug,
                name: item.name,
                price: parseInt(item.price.replace('₹', '')),
                quantity: item.quantity,
            })),
            totalAmount: total,
            address: formData.address,
        };

        try {
            const res = await axios.post('http://localhost:5000/api/orders', orderData);
            if (res.status === 201) {
                alert('✅ Order Placed Successfully!');
                clearCart();
                router.push('/order-success');
            }
        } catch (err) {
            console.error('❌ Order Error:', err);
            alert('❌ Failed to place order. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-gradient-to-b from-[#e6f4ec] to-[#ffffff] py-10 px-4">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-green-700 mb-10 museo">
                        Checkout 🧾
                    </h1>

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* ✅ Shipping Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white p-6 rounded-xl shadow-2xl space-y-5"
                        >
                            <h2 className="text-2xl font-semibold text-green-700">Shipping Details</h2>

                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border border-green-300 focus:ring-2 focus:ring-green-400 rounded px-4 py-2"
                            />
                            <textarea
                                name="address"
                                placeholder="Shipping Address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full border border-green-300 focus:ring-2 focus:ring-green-400 rounded px-4 py-2"
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border border-green-300 focus:ring-2 focus:ring-green-400 rounded px-4 py-2"
                            />

                            {/* ✅ Payment Options */}
                            <div>
                                <label className="block font-semibold text-green-700 mb-2">Payment Method</label>
                                <div className="flex flex-col gap-2">
                                    {['cod', 'upi', 'card'].map((method) => (
                                        <label key={method} className="flex items-center">
                                            <input
                                                type="radio"
                                                name="payment"
                                                value={method}
                                                checked={formData.payment === method}
                                                onChange={handleChange}
                                            />
                                            <span className="ml-2 capitalize">
                                                {method === 'cod' ? 'Cash on Delivery' :
                                                method === 'upi' ? 'UPI' :
                                                'Credit/Debit Card'}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded transition-all ${
                                    loading ? 'opacity-70 cursor-not-allowed' : ''
                                }`}
                            >
                                {loading ? 'Placing Order...' : 'Place Order'}
                            </button>
                        </form>

                        {/* ✅ Order Summary */}
                        <div className="bg-white p-6 rounded-xl shadow-2xl">
                            <h2 className="text-2xl font-semibold text-green-700 mb-4">Order Summary</h2>
                            {cart.map((item) => (
                                <div key={item.slug} className="flex items-center justify-between mb-5">
                                    <div className="flex items-center gap-4">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={60}
                                            height={60}
                                            className="rounded-xl"
                                        />
                                        <div>
                                            <p className="font-medium text-gray-800">{item.name}</p>
                                            <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                        </div>
                                    </div>
                                    <p className="text-green-700 font-semibold">{item.price}</p>
                                </div>
                            ))}

                            <hr className="my-4 border-t" />
                            <div className="flex justify-between text-lg font-bold">
                                <span>Total:</span>
                                <span>₹{total}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
}
