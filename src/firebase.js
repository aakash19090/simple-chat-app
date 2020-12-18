import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDe6UESk13_sJdwWYBQ6hzkOY7cdmZSxAo",
    authDomain: "messenger-clone-8d909.firebaseapp.com",
    projectId: "messenger-clone-8d909",
    storageBucket: "messenger-clone-8d909.appspot.com",
    messagingSenderId: "411557630238",
    appId: "1:411557630238:web:f6101f544b815d313cb90f",
    measurementId: "G-EB3T9BTL2S"
})

const db = firebaseApp.firestore();

export default db;