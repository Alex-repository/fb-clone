import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBhU261NApbiDCIWghusjXWbhT4kIPcsgo",
    authDomain: "fb-clone-92241.firebaseapp.com",
    databaseURL: "https://fb-clone-92241.firebaseio.com",
    projectId: "fb-clone-92241",
    storageBucket: "fb-clone-92241.appspot.com",
    messagingSenderId: "389083733367",
    appId: "1:389083733367:web:412cf3c13a5f0a02769572",
    measurementId: "G-L95VVLB4HL"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth, provider};
  export default db;
  