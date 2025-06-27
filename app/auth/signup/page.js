'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { User, Lock, Mail } from 'lucide-react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/firebaseConfig';
import SignInProviders from '@/app/componets/SignInProviders';

const Page = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("✅ User signed up:", userCredential.user);
            alert("Account created successfully!");
        } catch (error) {
            alert("Signup failed: " + error.message);
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-black text-white font-mont">
            <div className="w-full md:w-1/2 relative h-[300px] md:h-auto">
                <Image
                    src="/bgauth.jpg"
                    alt="Signup Background"
                    fill
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 z-10 flex flex-col justify-center items-center px-4 text-center">
                    <h2 className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[44px] font-bold text-[#38D65C] drop-shadow-lg">
                        Reconnect with Nature
                    </h2>
                    <p className="text-[#59EB48] mt-2 text-sm sm:text-base">
                        GreenKart. For those already on the green path
                    </p>
                    <Link href="/auth/login">
                        <button className="mt-6 bg-gradient-to-r from-[#209A63] via-[#53AC32] to-[#7FC864] px-6 py-3 rounded font-semibold text-white text-lg sm:text-xl hover:opacity-90 transition-all">
                            LOGIN
                        </button>
                    </Link>
                </div>
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center py-10 px-6 bg-[#253128]">
                <div className="w-full max-w-md space-y-6">
                    <h2 className="text-[32px] sm:text-[42px] text-center text-[#38D65C] font-semibold">
                        Create Account
                    </h2>
                    <form className="flex flex-col gap-5" onSubmit={handleSignup}>
                        <div className="flex items-center border px-4 py-3 rounded-[15px]">
                            <Mail className="text-[#59EB48] mr-3" size={20} />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-transparent outline-none text-white placeholder-[#59EB48]"
                            />
                        </div>
                        <div className="flex items-center border px-4 py-3 rounded-[15px]">
                            <User className="text-[#59EB48] mr-3" size={20} />
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full bg-transparent outline-none text-white placeholder-[#59EB48]"
                            />
                        </div>
                        <div className="flex items-center border px-4 py-3 rounded-[15px]">
                            <Lock className="text-[#59EB48] mr-3" size={20} />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-transparent outline-none text-white placeholder-[#59EB48]"
                            />
                        </div>
                        <div className="flex items-center border px-4 py-3 rounded-[15px]">
                            <Lock className="text-[#59EB48] mr-3" size={20} />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full bg-transparent outline-none text-white placeholder-[#59EB48]"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-[#209A63] via-[#53AC32] to-[#7FC864] text-white py-3 rounded text-lg font-semibold hover:opacity-90 transition-all"
                        >
                            SIGN UP
                        </button>
                    </form>

                    <div className="flex justify-center gap-4 mt-6 text-2xl">
                        <SignInProviders />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
