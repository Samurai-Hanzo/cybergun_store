import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDaWWqxrICnqZOY0MIRC7OZQ5MyGMFVPmw",
  authDomain: "cybergun-901fe.firebaseapp.com",
  projectId: "cybergun-901fe",
  storageBucket: "cybergun-901fe.appspot.com",
  messagingSenderId: "302827270336",
  appId: "1:302827270336:web:6723dfc83163239b4f7d25",
  measurementId: "G-EDXDXQQ435",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
