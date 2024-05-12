import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDRnHfucnXxDoZkaaF0YQTTsWqz4BKROD8",
    authDomain: "hacking-30c38.firebaseapp.com",
    projectId: "hacking-30c38",
    storageBucket: "hacking-30c38.appspot.com",
    messagingSenderId: "746311810679",
    appId: "1:746311810679:web:a8341c96b8a317d9f65072"
  };

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Get the submit button element for signup
const submitButton = document.getElementById('signupSubmit');

// Event listener for signup button click
submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const firstname = document.getElementById("signupFirstname").value;
    const lastname = document.getElementById("signupLastname").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirm = document.getElementById("signupConfirm").value;

    if (password !== confirm) {
        alert("Passwords do not match!");
        return;
    }

    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // Store additional user data in Firebase Realtime Database
            set(ref(database, 'users/' + user.uid), {
                firstname: firstname,
                lastname: lastname,
                email: email
            });
            alert("User created successfully!");
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert("Error occurred: " + errorMessage);
        });
});


// this is login of the user
// this is login of the user
const loginButton = document.getElementById('login_button'); // Get the login button element
let userId

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("loging clicked")

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const dt = new Date(); // Use new Date() to get the current date and time
            
            update(ref(database, 'users/' + user.uid), {
                last_login: dt
            })
            alert("User logged in successfully!");
            userId=user.uid;
            location.href = "./homepage.html";

            
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert("Error occurred: " + errorMessage);
        });
});

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;

        // ...
    } else {
        // User is signed out
        // ...
    }
});
