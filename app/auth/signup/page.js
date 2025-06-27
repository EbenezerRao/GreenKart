'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { User, Lock, Mail } from 'lucide-react';
import { FaGoogle, FaFacebookF, FaXTwitter } from 'react-icons/fa6';

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
            const user = userCredential.user;
            console.log("✅ User signed up:", user);
            alert("Account created successfully!");
        } catch (error) {
            console.error("Signup error:", error.message);
            alert("Signup failed: " + error.message);
        }
    };

    return (
        <div className="w-full h-auto md:h-screen relative flex flex-col md:flex-row bg-black text-white font-mont">
            <div className="w-full md:w-1/2 h-[300px] md:h-full relative">
                <Image
                    src="/bgauth.jpg"
                    alt="Signup Background"
                    fill
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 z-10 flex flex-col justify-center items-center px-4 text-center">
                    <h2 className="mont text-[28px] sm:text-[34px] md:text-[38px] lg:text-[44px] font-bold text-[#38D65C] drop-shadow-lg">
                        Reconnect with Nature
                    </h2>
                    <p className="mont text-[#59EB48] mt-2 text-[13px] sm:text-[14px] md:text-[16px]">
                        GreenKart. For those already on the green path
                    </p>
                    <button className="mt-6 sm:mt-8 mont bg-gradient-to-r from-[#209A63] via-[#53AC32] to-[#7FC864] px-6 sm:px-10 py-2 sm:py-3 rounded font-semibold text-white text-[18px] sm:text-[22px] hover:opacity-90 transition-all">
                        <Link href="/auth/login">LOGIN</Link>
                    </button>
                </div>
            </div>
            <div className="w-full md:w-1/2 h-auto py-10 md:py-0 bg-[#253128] flex flex-col items-center justify-center px-6 sm:px-10 lg:px-12 z-10">
                <h2 className="mont text-[32px] sm:text-[42px] md:text-[50px] text-[#38D65C] font-semibold">
                    Create Account
                </h2>
                <form
                    className="w-full max-w-md mt-6 sm:mt-8 flex flex-col gap-4 sm:gap-6"
                    onSubmit={handleSignup}
                >
                    <div className="flex items-center border border-gradient px-4 py-3 rounded-[15px]">
                        <Mail className="text-[#59EB48] mr-3" size={20} />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-transparent outline-none text-white placeholder-[#59EB48]"
                        />
                    </div>
                    <div className="flex items-center border border-gradient px-4 py-3 rounded-[15px]">
                        <User className="text-[#59EB48] mr-3" size={20} />
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full bg-transparent outline-none text-white placeholder-[#59EB48]"
                        />
                    </div>
                    <div className="flex items-center border border-gradient px-4 py-3 rounded-[15px]">
                        <Lock className="text-[#59EB48] mr-3" size={20} />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-transparent outline-none text-white placeholder-[#59EB48]"
                        />
                    </div>
                    <div className="flex items-center border border-gradient px-4 py-3 rounded-[15px]">
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
                        className="bg-gradient-to-r from-[#209A63] via-[#53AC32] to-[#7FC864] mont text-white py-3 rounded text-[18px] sm:text-[20px] font-semibold hover:opacity-90 transition-all"
                    >
                        SIGN UP
                    </button>
                </form>

                <div className="flex mt-6 sm:mt-8 space-x-4 sm:space-x-6 text-[24px] sm:text-[28px]">
                    {/* <FaGoogle className="text-[#DB4437] hover:scale-110 transition-transform cursor-pointer" />
                    <FaFacebookF className="text-[#4267B2] hover:scale-110 transition-transform cursor-pointer" />
                    <FaXTwitter className="text-[#1DA1F2] hover:scale-110 transition-transform cursor-pointer" /> */}
                    <SignInProviders/>
                </div>
            </div>
        </div>
    );
};

export default Page;
