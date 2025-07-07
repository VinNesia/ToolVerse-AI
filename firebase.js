import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDq2AiS90quxL8Ck3HmwQ18PwspxS9iqeQ",
  authDomain: "tool-verse-ai.firebaseapp.com",
  projectId: "tool-verse-ai",
  storageBucket: "tool-verse-ai.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456789"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
