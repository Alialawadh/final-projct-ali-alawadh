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

function signIn() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  const promise = auth.signInWithEmailAndPassword(email, password);
  promise.catch((e) => alert(e.message));
}

auth.onAuthStateChanged((user) => {
  console.log(user);
});
