import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBhez7AfSqWEdWZu-ghZbtbt091bwIkudQ",
  authDomain: "chat-9b092.firebaseapp.com",
  databaseURL: "https://chat-9b092.firebaseio.com"
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();