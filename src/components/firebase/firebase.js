import firebase from 'firebase/app';
import "firebase/storage";

  const firebaseConfig = {
    apiKey: "AIzaSyC9GTBobZEZtmUnwRGL0v-krjLhyP_R8tE",
    authDomain: "absolutecomics-47bb8.firebaseapp.com",
    projectId: "absolutecomics-47bb8",
    storageBucket: "absolutecomics-47bb8.appspot.com",
    messagingSenderId: "61349307629",
    appId: "1:61349307629:web:d5ce5a6c9aa78d0565d8e4",
    measurementId: "G-BE76C09EHP"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
const storage =  firebase.storage();

export {storage, firebase as default}
