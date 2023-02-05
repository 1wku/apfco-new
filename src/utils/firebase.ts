import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCGnUycIWHeEj9YlyDwbw-O0a9D6TiwPFc",
  authDomain: "apfco-data.firebaseapp.com",
  projectId: "apfco-data",
  storageBucket: "apfco-data.appspot.com",
  messagingSenderId: "236354200980",
  appId: "1:236354200980:web:daeebe5503882c2de91b81",
  measurementId: "G-GCD7P5L77W",
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
