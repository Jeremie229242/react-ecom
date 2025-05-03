//import * as firebase from "firebase";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKPx9lmP26KI1JTfd3NGUjh0Vf6vcTpd0",
  authDomain: "ecoom12.firebaseapp.com",
  databaseURL: "https://ecoom12.firebaseio.com",
  projectId: "ecoom12",
  storageBucket: "ecoom12.firebasestorage.app",
  messagingSenderId: "560114373622",
  appId: "1:560114373622:web:3958ee032e67fe5f5bedd7"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

// export
//export const auth = firebase.auth();
//export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();




// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
 
// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
