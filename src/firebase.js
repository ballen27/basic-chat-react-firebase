import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCZ_FGUgbJd4T7ck1i9VfogoWlY86DQpc",
  authDomain: "basic-chat-1a6e3.firebaseapp.com",
  projectId: "basic-chat-1a6e3",
  storageBucket: "basic-chat-1a6e3.appspot.com",
  messagingSenderId: "825846500572",
  appId: "1:825846500572:web:ea8c118e41df35d458b819",
  measurementId: "G-0Z61WMLF1T",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
const analytics = getAnalytics(app);
