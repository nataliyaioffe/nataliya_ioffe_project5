import firebase from "firebase";

var config = {
    apiKey: "AIzaSyAgHzLkN_jfvbHFtNBgQ_wJkFdL6LvLNu8",
    authDomain: "harry-potter-7e981.firebaseapp.com",
    databaseURL: "https://harry-potter-7e981.firebaseio.com",
    projectId: "harry-potter-7e981",
    storageBucket: "",
    messagingSenderId: "209730061513"
};
firebase.initializeApp(config);

export default firebase