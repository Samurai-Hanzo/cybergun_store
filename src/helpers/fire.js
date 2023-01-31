import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyJvAk_1YD_6OL8YnSXa39-26lmLQJres",
  authDomain: "cybergun-fb3d9.firebaseapp.com",
  projectId: "cybergun-fb3d9",
  storageBucket: "cybergun-fb3d9.appspot.com",
  messagingSenderId: "387110930625",
  appId: "1:387110930625:web:a555342604e61703aa2c40",
  measurementId: "G-TTY684MQQN",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
