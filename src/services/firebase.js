import firebase from "firebase";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBhez7AfSqWEdWZu-ghZbtbt091bwIkudQ",
  authDomain: "chat-9b092.firebaseapp.com",
  databaseURL: "https://chat-9b092-default-rtdb.firebaseio.com",
  projectId: "chat-9b092",
  storageBucket: "chat-9b092.appspot.com",
  messagingSenderId: "449641980872",
  appId: "1:449641980872:web:e62bf7bbcc8a4d339e96fd",
  measurementId: "G-PCPETS9CJ8"
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();