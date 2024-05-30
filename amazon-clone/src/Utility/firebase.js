
import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAHB_bxoZ6ezP3-BWx7cXWa0QIjqI-qB_0",
	authDomain: "clone-1b791.firebaseapp.com",
	projectId: "clone-1b791",
	storageBucket: "clone-1b791.appspot.com",
	messagingSenderId: "1071860804494",
	appId: "1:1071860804494:web:5ad5f3eca5417ca3a8d2df",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db =app.firestore()