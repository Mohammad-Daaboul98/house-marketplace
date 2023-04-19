import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBfHWK3rk1DwvjAj_gCLhq_W-bAJrZRqXA",
  authDomain: "house-marketingplace.firebaseapp.com",
  projectId: "house-marketingplace",
  storageBucket: "house-marketingplace.appspot.com",
  messagingSenderId: "522095086645",
  appId: "1:522095086645:web:1e0c3ee9355c8a70c9757c"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()