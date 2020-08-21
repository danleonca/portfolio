import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYgFO0vbIzeYZxIM908E0le0JCdEGA0I0",
  authDomain: "profile-7ccd3.firebaseapp.com",
  databaseURL: "https://profile-7ccd3.firebaseio.com",
  projectId: "profile-7ccd3",
  storageBucket: "profile-7ccd3.appspot.com",
  messagingSenderId: "35683583678",
  appId: "1:35683583678:web:b7b9f6ebf464d0c310c0ef",
  measurementId: "G-BTFGM2BK7F",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export { firebase };
