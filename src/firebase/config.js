import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBsD7TSsp8oSFtoAhey8YFsPQojarSqOn4",
  authDomain: "sunny-rhythms.firebaseapp.com",
  projectId: "sunny-rhythms",
  storageBucket: "sunny-rhythms.appspot.com",
  messagingSenderId: "1552947638",
  appId: "1:1552947638:web:dfd0ad1a220949db83c917",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
