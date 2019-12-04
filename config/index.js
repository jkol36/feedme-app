import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDfIqzg8JzgezKnv64FXm-_ZXWbeQHzP6k ",
  authDomain: "feedme-ead49.firebaseapp.com",
  databaseURL: "https://feedme-ead49.firebaseio.com",
  storageBucket: "feedme-ead49.appspot.com"
};

firebase.initializeApp(firebaseConfig);