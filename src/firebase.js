import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsQ8xj0OVhAgKh-L7IBW9f_SbK1_nfOJ0",
  authDomain: "clone-clone-42590.firebaseapp.com",
  projectId: "clone-clone-42590",
  storageBucket: "clone-clone-42590.appspot.com",
  messagingSenderId: "926506425941",
  appId: "1:926506425941:web:9d78749119abad7f4dfedc",
  measurementId: "G-9N1PTKE8L1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };