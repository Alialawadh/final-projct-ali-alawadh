let myVar;

function myFunction0() {
  myVar = setTimeout(showPage, 950);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyDTCg2I6zTTb6rmjDijGAYJEZiQztANWTs",
  authDomain: "my-final-project-be127.firebaseapp.com",
  databaseURL: "https://my-final-project-be127.firebaseio.com",
  projectId: "my-final-project-be127",
  storageBucket: "my-final-project-be127.appspot.com",
  messagingSenderId: "869045106538",
  appId: "1:869045106538:web:612344e09b8fd477809713",
  measurementId: "G-LKYDFQPNPD",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let database = firebase.database;
const auth = firebase.auth();
let inerHere = document.getElementById("w3-large");
let firestore = firebase.firestore();

console.log(auth.currentUser);

var ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

var ID_LENGTH = 15;

var generate = function () {
  var rtn = "";
  for (var i = 0; i < ID_LENGTH; i++) {
    rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
  }
  return rtn;
};

auth.onAuthStateChanged((user) => {
  console.log(user);
});

let btnSend = document.querySelector("#send");

function getMessage() {
  let ref = firestore.collection("messages");
  let ul = document.querySelector(".w3-card-1");
  let div = document.querySelector(".w3-card-4");
  ref
    .get()
    .then(function (collection) {
      collection.docs.forEach((doc) => {
        let li = document.createElement("li");
        li.setAttribute("class", "w3-card-4");
        let spanName = document.createElement("SPAN");
        spanName.setAttribute("id", "name");

        spanName.innerHTML = doc.data().name;

        let par = document.createElement("P");
        par.setAttribute("class", "massage");
        par.innerHTML = doc.data().message;
        li.appendChild(spanName);
        li.appendChild(par);
        ul.appendChild(li);
        // console.log(doc.data().name);
        // console.log(doc.data().message);
      });
    })
    .catch(function (error) {
      console.log("got an err", error);
    });
}

getMessage();

function sendMessage() {
  let ref = firestore.doc("users/" + auth.currentUser.uid);
  let msgRef = firestore.doc("messages/" + generate());
  let msg = document.getElementById("massageHere").value;
  let name;
  if (msg == "") {
    return;
  }
  ref.get().then(function (doc) {
    name = doc.data().name;

    msgRef
      .set({
        name: name,
        message: msg,
      })
      .then(function () {
        console.log("addeeeedd!!!");
        location.reload();
      });
  });
}
