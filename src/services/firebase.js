import firebase from 'firebase';
import Rebase from 're-base'
//import dotenv from 'dotenv'
//dotenv.config()
 
const config = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MS_ID",
  appId: "YOUR_APP_ID",
  databaseURL: "YOUR_DB_URL"   
}
 
 
firebase.initializeApp(config);
 
 
const auth = firebase.auth; 
const db = firebase.database();
var base = Rebase.createClass(db);
export { auth, db, base }
