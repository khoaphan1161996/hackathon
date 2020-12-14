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
            console.log(uid)
            console.log("Signin")
            return uid
        })
        .then((uid) => {
            return readData(uid)
        })
}
function readData(uid) {
    let docRef = db.collection("users").doc(uid);
    return docRef.get().then(function (doc) {

        if (doc.exists) {
            console.log(doc.data())
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

    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            let uid = user.user.uid
            return uid
        })
        .then((uid) => addData(uid, uname))
        .catch((error) => {
            var errorCode = error.code;
            // ..
            console.log(errorCode)
            return errorCode
        });

}
function addData(uid, uname) {
    db.collection("users").doc(`${uid}`).set({
        uid:uid,
        uname: uname,
        choosing: { tenphim: "", seat: [] }
    })
        .then(function () {
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        })
}

export function Updatedatafake() {
    let todoref = db.collection("Dataphim").doc(`123`);
    return todoref.update({
        ava: "https://galaxycine.vn/media/2020/11/24/450-mom_1606210227972.jpg",
        name: "DORAEMON: NOBITA'S NEW DINOSAUR",
        time: "110 minute",
        point: 8.9,
        seats: {
            line1: [{ seat: "A1", status: "choosed" }, { seat: "A2", status: "none" }, { seat: "A3", status: "none" }, { seat: "A4", status: "choosing" }, { seat: "A5", status: "none" }, { seat: "A6", status: "none" }, { seat: "A7", status: "none" }],
            line2: [{ seat: "A1", status: "choosed" }, { seat: "A2", status: "none" }, { seat: "A3", status: "none" }, { seat: "A4", status: "choosing" }, { seat: "A5", status: "none" }, { seat: "A6", status: "none" }, { seat: "A7", status: "none" }],
            line3: [{ seat: "A1", status: "choosed" }, { seat: "A2", status: "none" }, { seat: "A3", status: "none" }, { seat: "A4", status: "choosing" }, { seat: "A5", status: "none" }, { seat: "A6", status: "none" }, { seat: "A7", status: "none" }],
        }
    })
        .then(function () {
            console.log("Document successfully updated!");
        })
        .catch(function (error) {
            console.error("Error updating document: ", error);
        });
}

export function Readphim(res,res2,Callback) {
    //    function subscribeConversation(conversationId, callback) 
    db.collection("Dataphim")
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                res.push(doc.data());
                res2.push(doc.id)
                console.log(doc.id)
            });
        }).then(()=>Callback(res,res2))
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });
}


export function Readseats (idphim,callback){
    db.collection("Dataphim")
    .doc(idphim)
    // .where("name", "==", tenphim)
    .onSnapshot(function(doc) {
        // snapshot.docChanges().forEach(function(change) {
           
            // console.log(doc.data())
            callback(doc.data())
        });
    
}

//---------------------------------------------------------------------------------
export function Changestatus(idphim,data){
    let updatephim = db.collection("Dataphim").doc(`${idphim}`);
    console.log(idphim,"and",data)
    return updatephim.update({
        seats: data})
        .then(function (data) {
            console.log("Document successfully updated!");
        })
        .catch(function (error) {
            console.error("Error updating document: ", error);
        });

}

//-----------------------USER UPDATE ----------------------------------------------
export function ChangestatusUser (iduser,data){
    let updatephim = db.collection("users").doc(`${iduser}`);
    console.log(iduser,"and",data)
    return updatephim.update({
        choosing: data})
        .then(function (data) {
            console.log("Document successfully updated!");
        })
        .catch(function (error) {
            console.error("Error updating document: ", error);
        });
}