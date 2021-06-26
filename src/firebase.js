import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp =  firebase.initializeApp({
    apiKey: "AIzaSyD3EbFGI2rOX81aJh8H2GNOofjkgp8BiR8",
    authDomain: "clone-1c7e7.firebaseapp.com",
    projectId: "clone-1c7e7",
    storageBucket: "clone-1c7e7.appspot.com",
    messagingSenderId: "84619905258",
    appId: "1:84619905258:web:32d85abe6904c0b7c2af93",
    measurementId: "G-QH9PGJ4BTS"
  });

const db = firebase.firestore();

export { db };