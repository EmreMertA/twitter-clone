import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa1ziKUiM7Qyn3cCmuVI3-tpNgx25U79I",
  authDomain: "twitter-clone-f7ce6.firebaseapp.com",
  projectId: "twitter-clone-f7ce6",
  storageBucket: "twitter-clone-f7ce6.appspot.com",
  messagingSenderId: "418302721370",
  appId: "1:418302721370:web:8710763d6fc16282f3c763",
  measurementId: "G-P4Z4KKEHX9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const analytics = getAnalytics(app);

export default db;
