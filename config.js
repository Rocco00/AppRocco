import Firebase from "firebase";
const config = {
  apiKey: "AIzaSyDzTdvADLmHIdV2ofYRyEDWrtm2jJ8aaS8",
  authDomain: "hair-rocco.firebaseapp.com",
  databaseURL: "https://hair-rocco.firebaseio.com",
  projectId: "hair-rocco",
  storageBucket: "hair-rocco.appspot.com",
  messagingSenderId: "647358661788",
  appId: "1:647358661788:web:6a95d2e4bae748e5"
  };
export const firebase = Firebase.initializeApp (config);
  export const db = firebase.database();
