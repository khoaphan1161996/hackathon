import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDj9H1dkqwJTbMrJyzpB_fiT4nKCMvfUh8",
    authDomain: "rap-chieu-phim.firebaseapp.com",
    projectId: "rap-chieu-phim",
    storageBucket: "rap-chieu-phim.appspot.com",
    messagingSenderId: "486777808390",
    appId: "1:486777808390:web:9cf35e9c2a833c7abe8587",
    measurementId: "G-FFHPGETK2R"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export function Signinfunc(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            let uid = user.user.uid
            return uid
        })
        .then(function () {
            console.log("Signin");
        })
    // .then((uid) => {
    //     return readData(uid)
    // })
}
function readData(uid) {
    let docRef = db.collection("users").doc(uid);
    return docRef.get().then(function (doc) {
        if (doc.exists) {
            return doc.data()
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });

}


export function Signupfunc(email, password, uname) {

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            let uid = user.user.uid
            return addData(uid, uname)
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
            console.log(errorCode)
        });

}
function addData(uid, uname) {
    db.collection("users").doc(`${uid}`).set({
        uname: uname,
    })
        .then(function () {
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}