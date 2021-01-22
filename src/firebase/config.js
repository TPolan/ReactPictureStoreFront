// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB4vUaNHfxGFkKy1BbCeaJKLAp9UdgJYCw",
    authDomain: "reactpicturesstorefront.firebaseapp.com",
    projectId: "reactpicturesstorefront",
    storageBucket: "reactpicturesstorefront.appspot.com",
    messagingSenderId: "242615345116",
    appId: "1:242615345116:web:b18b216fff1d42b245f919",
    measurementId: "G-TLFG7SMHZV"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const firestore = firebase.firestore();
export {storage, firestore};