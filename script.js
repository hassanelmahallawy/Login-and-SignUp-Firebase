import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDFnj3NElYX6vY4sQ2nbF0zzF2803Qufrw",
    authDomain: "hassan-3edb0.firebaseapp.com",
    databaseURL: "https://hassan-3edb04-default-rtdb.firebaseio.com",
    projectId: "hassan-3edb0",
    storageBucket: "hassan-3edb0.appspot.com",
    messagingSenderId: "1009000358737",
    appId: "1:1009000358737:web:c8372962a4894230336970",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const authForm = document.getElementById('auth-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const toggleButton = document.getElementById('toggle-btn');

let isLogin = true;

authForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    try {
        if (isLogin) {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('Logged in:', user);
            alert('Logged in successfully!');
        } else {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('Signed up:', user);
            alert('Account created successfully!');
        }
    } catch (error) {
        console.error('Error:', error.message);
        alert('An error occurred. Please try again.');
    }
});

toggleButton.addEventListener('click', () => {
    isLogin = !isLogin;
    authForm.reset();
    authForm.querySelector('button[type="submit"]').textContent = isLogin ? 'Login' : 'Signup';
});
