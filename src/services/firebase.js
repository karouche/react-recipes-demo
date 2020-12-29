import firebase from 'firebase';
import Rebase from 're-base'
//import dotenv from 'dotenv'
//dotenv.config()
 
const config = {
  apiKey: "AIzaSyDM0lGunMth1L3EHlmFUUg5Th0uzZS6TOM",
  authDomain: "frb-recipes-exotic.firebaseapp.com",
  projectId: "frb-recipes-exotic",
  storageBucket: "frb-recipes-exotic.appspot.com",
  messagingSenderId: "975673926613",
  appId: "1:975673926613:web:2717f6b6aa6565ca66935c",
  databaseURL: "https://frb-recipes-exotic-default-rtdb.europe-west1.firebasedatabase.app/"   
}
 
 
firebase.initializeApp(config);
 
 
const auth = firebase.auth; 
const db = firebase.database();
var base = Rebase.createClass(db);
export { auth, db, base }
