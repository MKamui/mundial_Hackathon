// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDfMRInIOhax7MJU1C-x1iUoWympu0X_c",
  authDomain: "mundial-auth.firebaseapp.com",
  projectId: "mundial-auth",
  storageBucket: "mundial-auth.appspot.com",
  messagingSenderId: "73476946002",
  appId: "1:73476946002:web:cf0dc9169100d554a9c78b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app