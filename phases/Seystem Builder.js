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

auth.onAuthStateChanged((user) => {
  console.log(user);
  checkSignedIn();
});
function signOut() {
  firebase.auth().signOut();
}

//##################################################################

// SIDE BAR HRERE DOWN

// ##################################################################

function openNav() {
  document.getElementById("myNav").style.width = "20%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function checkSignedIn() {
  let signInBtn = document.querySelector("#signIn");
  let signUpBtn = document.querySelector("#signUp");
  let signOutBtn = document.querySelector("#signOut");
  let name;
  if (auth.currentUser !== null) {
    signInBtn.style.display = "none";
    signUpBtn.style.display = "none";
    firestore
      .doc("users/" + auth.currentUser.uid)
      .get()
      .then(function (doc) {
        document.getElementById("userName").innerHTML =
          doc.data().name + " مرحبا بك ";
      })
      .catch(function (e) {
        console.log(e);
      });
    console.log(auth.currentUser.email);
  } else if (auth.currentUser == null) {
    signOutBtn.style.display = "none";
  }
}
