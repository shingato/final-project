import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBkLKAjsFctnF_yRpqGyN7jvZJ6Z-vqMFU",
    authDomain: "finalproject-2841f.firebaseapp.com",
    databaseURL: "https://finalproject-2841f-default-rtdb.firebaseio.com/",
    projectId: "finalproject-2841f",
    storageBucket: "finalproject-2841f.appspot.com",
    messagingSenderId: "311775389989",
    appId: "1:311775389989:web:7b21a3987879eb5b1512cc"
  };
  // Initialize Firebase
  var fire = firebase.initializeApp(firebaseConfig);
  export default fire;
