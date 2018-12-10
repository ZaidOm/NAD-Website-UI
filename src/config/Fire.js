import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAIdcLV7iFU67Oi9XCvn3yOr-vzPYLNqhU",
    authDomain: "nad-final-462a2.firebaseapp.com",
    databaseURL: "https://nad-final-462a2.firebaseio.com",
    projectId: "nad-final-462a2",
    storageBucket: "",
    messagingSenderId: "823030360790"
}
const fire = firebase.initializeApp(config);

export default fire;