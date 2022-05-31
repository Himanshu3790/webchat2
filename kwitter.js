user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "Welcome " + user_name

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgUTrziJFV6Z4EZkPTK52MHTRVuZCXSHM",
    authDomain: "web-chat-17658.firebaseapp.com",
    databaseURL: "https://web-chat-17658-default-rtdb.firebaseio.com",
    projectId: "web-chat-17658",
    storageBucket: "web-chat-17658.appspot.com",
    messagingSenderId: "83004536227",
    appId: "1:83004536227:web:bc5dc5e1dce143ab03d616",
    measurementId: "G-9B7NES4JMK"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
