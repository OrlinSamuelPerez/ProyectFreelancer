import firebase from "firebase/app";
import "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyASSamJ8j_YxV3nQZ7vhGJSfy49MGD680k",
    authDomain: "proyect-freelancer.firebaseapp.com",
    projectId: "proyect-freelancer",
    storageBucket: "proyect-freelancer.appspot.com",
    messagingSenderId: "344150390483",
    appId: "1:344150390483:web:fa609da1fd2d648eb2c626"
};
  // Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export const auth =  firebase.auth();
export const db = firebase.firestore();