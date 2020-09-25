import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDlCMYKeev2Iv4DLrQhY2CF0lh4d-bGEew",
    authDomain: "n-shopping.firebaseapp.com",
    databaseURL: "https://n-shopping.firebaseio.com",
    projectId: "n-shopping",
    storageBucket: "n-shopping.appspot.com",
    messagingSenderId: "473955149595",
    appId: "1:473955149595:web:217473cf0c71f805ea95be",
    measurementId: "G-31HG6S4HFD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };