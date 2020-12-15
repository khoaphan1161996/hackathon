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
        .catch((error) => {
            var errorCode = error.code;
            return " " + errorCode
        });
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
        uid: uid,
        uname: uname,
        choosing: {},
        booked: {}
    })
        .then(function () {
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        })
}

export function Updatedatafake() {
    let todoref = db.collection("Dataphim");
    return todoref.add({
        ava: "https://galaxycine.vn/media/2020/12/10/1350x900_1607592886042.jpg",
        name: "DEMON SLAYER THE MOVIE: MUGEN TRAIN",
        time: "117 minute",
        point: 9.2,
        seats: {
            line1: [{ seat: "A1", status: "none" }, { seat: "A2", status: "none" }, { seat: "A3", status: "none" }, { seat: "A4", status: "none" }, { seat: "A5", status: "none" }, { seat: "A6", status: "none" }, { seat: "A7", status: "none" }, { seat: "A8", status: "none" }, { seat: "A9", status: "none" }, { seat: "A10", status: "none" }, { seat: "A11", status: "none" }, { seat: "A12", status: "none" }],
            line2: [{ seat: "B1", status: "none" }, { seat: "B2", status: "none" }, { seat: "B3", status: "none" }, { seat: "B4", status: "none" }, { seat: "B5", status: "none" }, { seat: "B6", status: "none" }, { seat: "B7", status: "none" }, { seat: "B8", status: "none" }, { seat: "B9", status: "none" }, { seat: "B10", status: "none" }, { seat: "B11", status: "none" }, { seat: "B12", status: "none" }],
            line3: [{ seat: "C1", status: "none" }, { seat: "C2", status: "none" }, { seat: "C3", status: "none" }, { seat: "C4", status: "none" }, { seat: "C5", status: "none" }, { seat: "C6", status: "none" }, { seat: "C7", status: "none" }, { seat: "C8", status: "none" }, { seat: "C9", status: "none" }, { seat: "C10", status: "none" }, { seat: "C11", status: "none" }, { seat: "C12", status: "none" }],
            line4: [{ seat: "D1", status: "none" }, { seat: "D2", status: "none" }, { seat: "D3", status: "none" }, { seat: "D4", status: "none" }, { seat: "D5", status: "none" }, { seat: "D6", status: "none" }, { seat: "D7", status: "none" }, { seat: "D8", status: "none" }, { seat: "D9", status: "none" }, { seat: "D10", status: "none" }, { seat: "D11", status: "none" }, { seat: "D12", status: "none" }],
            line5: [{ seat: "E1", status: "none" }, { seat: "E2", status: "none" }, { seat: "E3", status: "none" }, { seat: "E4", status: "none" }, { seat: "E5", status: "none" }, { seat: "E6", status: "none" }, { seat: "E7", status: "none" }, { seat: "E8", status: "none" }, { seat: "E9", status: "none" }, { seat: "E10", status: "none" }, { seat: "E11", status: "none" }, { seat: "E12", status: "none" }],
        }
    })
        .then(function () {
            console.log("Document successfully updated!");
        })
        .catch(function (error) {
            console.error("Error updating document: ", error);
        });
}

export function Readphim(res, res2, Callback) {
    //    function subscribeConversation(conversationId, callback) 
    db.collection("Dataphim")
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                res.push(doc.data());
                res2.push(doc.id)
                // console.log(doc.id)
            });
        }).then(() => Callback(res, res2))
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });
}


export function Readseats(idphim, callback) {
    db.collection("Dataphim")
        .doc(idphim)
        // .where("name", "==", tenphim)
        .onSnapshot(function (doc) {
            // snapshot.docChanges().forEach(function(change) {

            // console.log(doc.data())
            callback(doc.data())
        });

}

//---------------------------------------------------------------------------------
export function Changestatus(idphim, data) {
    let updatephim = db.collection("Dataphim").doc(`${idphim}`);

    return updatephim.update({
        seats: data
    })
        .then(function (data) {
            console.log("Document successfully updated!");
        })
        .catch(function (error) {
            console.error("Error updating document: ", error);
        });

}

//-----------------------USER UPDATE ----------------------------------------------
export function ChangestatusUser(iduser, data) {
    let updatephim = db.collection("users").doc(`${iduser}`);

    return updatephim.update({
        choosing: data
    })

        .catch(function (error) {
            console.error("Error updating document: ", error);
        });
}
export function ChangestatusUser2(iduser, data) {
    let updatephim = db.collection("users").doc(`${iduser}`);
    console.log(iduser, "and", data)
    return updatephim.update({
        booked: data
    })

        .catch(function (error) {
            console.error("Error updating document: ", error);
        });
}

export function Usercurrent (){
    console.log("ASd")
let user = firebase.auth().currentUser;

if (user) {
  return true
} else {
  return false
}
}
export function Signout (){
    firebase.auth().signOut().then(function() {
        console.log("Sign-out successful")
      }).catch(function(error) {
          console.log("An error happened.")
      });
}