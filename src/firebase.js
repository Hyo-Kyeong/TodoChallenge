import firebase from "firebase";


const config = {
    /*
    apiKey: "AIzaSyCUb_3O0t3kyiNO-mhOk-tCwPGsoEBdkSY",
    authDomain: "todo-colud.firebaseapp.com",
    databaseURL: "https://todo-colud.firebaseio.com",
    projectId: "todo-colud",
    storageBucket: "todo-colud.appspot.com",
    messagingSenderId: "698633348155",
    appId: "1:698633348155:web:deb35ce96c4fc4c59fe81e",
    measurementId: "G-LGXZY45JQ7"
    */
   
    apiKey: "AIzaSyDuhxLE3bgT3PsII5vlubxfRM4nTOwCbmk",
    authDomain: "todo-app-67946.firebaseapp.com",
    databaseURL: "https://todo-app-67946.firebaseio.com",
    projectId: "todo-app-67946",
    storageBucket: "todo-app-67946.appspot.com",
    messagingSenderId: "685681077140",
    appId: "1:685681077140:web:5014698f7f54086dfbbd81",
    measurementId: "G-TNZKNM4HNH"
  
};

const fire = firebase.initializeApp(config);



export default fire ;