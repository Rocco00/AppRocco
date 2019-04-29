import Firebase from "firebase";
const config = {
  apiKey: "AIzaSyAvmrfzNmyx8m4fTSqReUuvXoFG1LkZdIo",
  authDomain: "approcco10.firebaseapp.com",
  databaseURL: "https://approcco10.firebaseio.com",
  projectId: "approcco10",
  storageBucket: "approcco10.appspot.com",
  messagingSenderId: "849364465374"
  };
  let app = Firebase.initializeApp (config);
  export const db = app.database();
  