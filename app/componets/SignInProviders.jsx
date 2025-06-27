'use client';

import { auth, googleProvider, githubProvider } from '@/firebase/firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { FaGoogle, FaGithub } from 'react-icons/fa6';

const SignInProviders = () => {
    const router = useRouter();

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log("Google login successful:", result.user);
            alert("Logged in with Google ✅");
            router.push('/');
        } catch (error) {
            console.error("Google login error:", error.message);
            alert("Google Sign-In Error: " + error.message);
        }
    };

    const handleGitHubLogin = async () => {
        try {
            const result = await signInWithPopup(auth, githubProvider);
            console.log("GitHub login successful:", result.user);
            alert("Logged in with GitHub 🐱");
            router.push('/');
        } catch (error) {
            console.error("GitHub login error:", error.message);
            alert("GitHub Sign-In Error: " + error.message);
        }
    };

    return (
        <>
            <FaGoogle
                onClick={handleGoogleLogin}
                className="text-[#DB4437] hover:scale-110 transition-all cursor-pointer"
            />
            <FaGithub
                onClick={handleGitHubLogin}
                className="text-white hover:scale-110 transition-all cursor-pointer"
            />
        </>
    );
};

export default SignInProviders;
