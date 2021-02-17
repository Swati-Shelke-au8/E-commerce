import firebase from "firebase/app";
import "firebase/storage";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDQxnjaPoeAoWt2s3zpFhY5Oz03KFZ7hs0",
  authDomain: "ecommerce-a66b6.firebaseapp.com",
  projectId: "ecommerce-a66b6",
  storageBucket: "ecommerce-a66b6.appspot.com",
  messagingSenderId: "354192351883",
  appId: "1:354192351883:web:df77e296d0245d11206a8e",
  measurementId: "G-C59H39Y9MD",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const storage = firebase.storage();

export { firebase, storage as default };
