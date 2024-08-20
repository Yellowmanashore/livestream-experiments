const db = firebase.firestore();
const pollOptionsDiv = document.getElementById('poll-options');
const submitVoteBtn = document.getElementById('submit-vote');
let selectedOption = '';

// Fetch poll options from Firestore
db.collection('polls').doc('currentPoll').get().then(doc => {
    if (doc.exists) {
        const options = doc.data().options;
        options.forEach(option => {
            const optionBtn = document.createElement('button');
            optionBtn.textContent = option;
            optionBtn.onclick = () => {
                selectedOption = option;
                optionBtn.classList.add('selected');
            };
            pollOptionsDiv.appendChild(optionBtn);
        });
    } else {
        pollOptionsDiv.textContent = 'No active poll.';
    }
});

// Submit vote
submitVoteBtn.onclick = () => {
    if (selectedOption) {
        db.collection('polls').doc('currentPoll').update({
            [`votes.${selectedOption}`]: firebase.firestore.FieldValue.increment(1)
        }).then(() => {
            alert('Vote submitted!');
        }).catch(error => {
            console.error('Error submitting vote:', error);
        });
    } else {
        alert('Please select an option.');
    }
};
