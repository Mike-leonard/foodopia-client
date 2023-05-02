// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/* TODO: need to pass it to env local */
const firebaseConfig = {
    apiKey: "AIzaSyCbTkoMSgZwLYlZyx56yZjyW7sES8oKZ_k",
    authDomain: "foodopia-60b32.firebaseapp.com",
    projectId: "foodopia-60b32",
    storageBucket: "foodopia-60b32.appspot.com",
    messagingSenderId: "385311651512",
    appId: "1:385311651512:web:a3256baebb8fc2fa4a264d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;