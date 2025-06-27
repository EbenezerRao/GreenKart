import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBaGs5Jf3PKuhguEwqjYgndE358cYS2NrQ",
    authDomain: "greenkart-auth.firebaseapp.com",
    projectId: "greenkart-auth",
    storageBucket: "greenkart-auth.firebasestorage.com",
    messagingSenderId: "40872070119",
    appId: "1:40872070119:web:284fd7893a7edf40a10b42",
    measurementId: "G-EM6MB2CMLN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider };
