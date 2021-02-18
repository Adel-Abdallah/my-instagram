import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD-8N92-XtxQdcqwEKgwomvqVB7zWKvyVY",
  authDomain: "not-instagaram.firebaseapp.com",
  projectId: "not-instagaram",
  storageBucket: "not-instagaram.appspot.com",
  messagingSenderId: "143592971580",
  appId: "1:143592971580:web:ab332e9e7d14d65bd6d239"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage, projectFirestore, timestamp };
