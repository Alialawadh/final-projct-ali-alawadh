// Your web app's Firebase configuration
var firebaseConfig = {
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

const auth = firebase.auth();
let firestore = firebase.firestore();

console.log(auth.currentUser);

function signUp() {
  let name = document.getElementById("name").value;
  let re = document.getElementById("rePassword").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (re != password) {
    alert("wrong pass");
  } else {
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.then(function () {
      auth.signInWithEmailAndPassword(email, password);
    });
    promise.catch((e) => alert(e.message));
    let ref = firestore.doc("users/" + auth.currentUser.uid);
    ref
      .set({
        name: name,
        email: email,
      })
      .then(function () {
        alert("added");
      })
      .catch(function (error) {
        alert(error);
      });
  }
}
