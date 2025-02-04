import { db } from "./firebase";
import { collection, getDoc, addDoc, doc, getDocs } from "firebase/firestore";

const urlsCollection = collection(db, "urls");

export const shortenUrl = async (longUrl: string) => {
    const docRef = await addDoc(urlsCollection, { longUrl, createdAt: new Date() });
    return docRef.id;
}

export const getLongUrl = async (shortId: string) => {
    const docSnap = await getDoc(doc(db, "urls", shortId));
    return docSnap.exists() ? docSnap.data()?.longUrl() : null;
}

export const getAllUrls = async () => {
    const snapshot = await getDocs(urlsCollection);
    return snapshot.docs.map((doc) => ({
        id: doc.id,
        shortUrl: `${window.location.origin}/${doc.id}`,
        longUrl: doc.data().longUrl
    }));
}