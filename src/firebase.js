import firebase from "firebase";


const config = {
    apiKey: "AIzaSyCUb_3O0t3kyiNO-mhOk-tCwPGsoEBdkSY",
    authDomain: "todo-colud.firebaseapp.com",
    databaseURL: "https://todo-colud.firebaseio.com",
    projectId: "todo-colud",
    storageBucket: "todo-colud.appspot.com",
    messagingSenderId: "698633348155",
    appId: "1:698633348155:web:deb35ce96c4fc4c59fe81e",
    measurementId: "G-LGXZY45JQ7"
  
};

const fire = firebase.initializeApp(config);



export default fire ;