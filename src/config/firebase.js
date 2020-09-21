// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD-vVjTtGs7DX7he1KEnH_pYJTv0o_JRoc",
  authDomain: "clone-18965.firebaseapp.com",
  databaseURL: "https://clone-18965.firebaseio.com",
  projectId: "clone-18965",
  storageBucket: "clone-18965.appspot.com",
  messagingSenderId: "670273522460",
  appId: "1:670273522460:web:213fb2531f3bd5ece888d9",
  measurementId: "G-4KGE12ZBWR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
