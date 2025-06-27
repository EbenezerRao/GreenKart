'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { User, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/firebaseConfig';
import SignInProviders from '@/app/componets/SignInProviders';

const Page = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("✅ Logged in as:", userCredential.user.email);
            alert("Login successful!");
            router.push('/');
        } catch (error) {
            alert("Login failed: " + error.message);
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-[#1D2B22] text-white font-mont">
            {/* Form Section */}
            <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-10">
                <div className="w-full max-w-md space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#2DE169] text-center">Member Login</h2>
                    <p className="text-center text-[#53AC32] text-sm sm:text-base">
                        Sign in to explore sustainable products and manage your GreenKart.
                    </p>

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div className="flex items-center px-4 py-3 rounded-[15px] shadow-md bg-transparent"
                            style={{ border: '2px solid', borderImage: 'linear-gradient(to right, #2DE169, #C9FFBF) 1' }}>
                            <User className="text-[#C9FFBF] mr-3" size={20} />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-transparent outline-none placeholder-[#C9FFBF] text-white"
                            />
                        </div>

                        <div className="flex items-center px-4 py-3 rounded-[15px] shadow-md bg-transparent"
                            style={{ border: '2px solid', borderImage: 'linear-gradient(to right, #2DE169, #C9FFBF) 1' }}>
                            <Lock className="text-[#C9FFBF] mr-3" size={20} />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-transparent outline-none placeholder-[#C9FFBF] text-white"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#2DE169] to-[#53AC32] py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-all">
                            LOGIN
                        </button>
                    </form>

                    <div className="flex justify-center gap-4 mt-6 text-2xl">
                        <SignInProviders />
                    </div>
                </div>
            </div>

            {/* Image / Right Section */}
            <div className="w-full md:w-1/2 relative flex items-center justify-center px-6 py-10 md:py-0">
                <Image
                    src="/bgauth.jpg"
                    alt="Login Background"
                    fill
                    className="object-cover opacity-60"
                />
                <div className="absolute z-10 text-center max-w-md">
                    <h2 className="text-[#2DE169] text-3xl sm:text-4xl font-bold mb-2">New Here?</h2>
                    <p className="text-[#8AF279] text-sm sm:text-base mb-6">
                        Sign up and explore eco-friendly products today
                    </p>
                    <button
                        onClick={() => router.push('/auth/signup')}
                        className="bg-gradient-to-r from-[#209A63] to-[#2DE169] text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-all">
                        SIGN UP
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page;
