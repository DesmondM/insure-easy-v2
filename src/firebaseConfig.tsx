import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqWownEmeJgIAbZqXs6pQiBi_1pc8U4zg",
  authDomain: "insure-easy.firebaseapp.com",
  projectId: "insure-easy",
  storageBucket: "insure-easy.appspot.com",
  messagingSenderId: "18024286310",
  appId: "1:18024286310:web:24dea01a7d6af3a1f705a7",
  measurementId: "G-5T30MFJGZT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
