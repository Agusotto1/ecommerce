// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5CdHQdSkRj2cyKb030skXl6xe9n4Ob9M",
  authDomain: "ecommerce-react-11343.firebaseapp.com",
  projectId: "ecommerce-react-11343",
  storageBucket: "ecommerce-react-11343.appspot.com",
  messagingSenderId: "802998058877",
  appId: "1:802998058877:web:1860dcebdb3bbb4c67d614"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db =  getFirestore(app)

export default db