// app/components/SignOutButton.jsx
'use client';

import { signOut } from 'firebase/auth';
import { auth } from '@/firebase/firebaseConfig';
import { useRouter } from 'next/navigation';

const SignOutButton = () => {
    const router = useRouter();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            alert("Logged out successfully!");
            router.push('/auth/login');
        } catch (error) {
            console.error("Sign out error:", error);
            alert("Something went wrong while signing out!");
        }
    };

    return (
        <button
            onClick={handleSignOut}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
            Sign Out
        </button>
    );
};

export default SignOutButton;
