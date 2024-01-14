import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
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
