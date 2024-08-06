import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPZNd56hzp0rnLwzemOgoY_ye5bI9BYNw",
  authDomain: "clone-8287c.firebaseapp.com",
  projectId: "clone-8287c",
  storageBucket: "clone-8287c.appspot.com",
  messagingSenderId: "916434493947",
  appId: "1:916434493947:web:54f77b831c7ab947532b5e",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()
