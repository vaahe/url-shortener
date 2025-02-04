import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAFJJTxmsiF9_a7MEVcCBiKltYHUuYIGLQ",
    authDomain: "url-shortener-2a3c7.firebaseapp.com",
    projectId: "url-shortener-2a3c7",
    storageBucket: "url-shortener-2a3c7.firebasestorage.app",
    messagingSenderId: "655902537793",
    appId: "1:655902537793:web:183e0e1eb14b4aa5906ec0",
    measurementId: "G-9LPM3JHFHP"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);