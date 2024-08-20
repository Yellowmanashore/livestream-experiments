// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

const loginBtn = document.getElementById('login-btn');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const pollCreationDiv = document.getElementById('poll-creation');

loginBtn.onclick = () => {
    auth.signInWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then((userCredential) => {
            pollCreationDiv.style.display = 'block';
            document.getElementById('login-form').style.display = 'none';
        })
        .catch((error) => {
            console.error('Error logging in:', error);
        });
};

const createPollBtn = document.getElementById('create-poll-btn');
createPollBtn.onclick = () => {
    const pollQuestion = document.getElementById('poll-question').value;
    const option1 = document.getElementById('option-1').value;
    const option2 = document.getElementById('option-2').value;
    const option3 = document.getElementById('option-3').value;
    const option4 = document.getElementById('option-4').value;

    const pollData = {
        question: pollQuestion,
        options: {
            option1: option1,
            option2: option2,
            option3: option3,
            option4: option4
        },
        votes: {
            option1: 0,
            option2: 0,
            option3: 0,
            option4: 0
        }
    };

    database.ref('polls/currentPoll').set(pollData)
        .then(() => {
            alert('Poll created successfully!');
        })
        .catch(error => {
            console.error('Error creating poll:', error);
        });
};
