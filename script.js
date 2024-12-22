"use strict";
const form = document.getElementById('survey-form');
const resultsDiv = document.getElementById('results');

form.addEventListener('submit', (e) => {e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const age = document.getElementById('age').value;
  const q1 = document.querySelector('input[name="q1"]:checked').value;
  const q2 = document.querySelector('input[name="q2"]:checked').value;
  const q3 = document.querySelector('input[name="q3"]:checked').value;
  
  if (name && email && age && q1 && q2 && q3) {
    resultsDiv.innerHTML = `
        <h2>Survey Results:</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Age: ${age}</p>
        <p>Question 1: ${q1}</p>
        <p>Question 2: ${q2}</p>
        <p>Question 3: ${q3}</p>
    `;

    // Optional: Clear form fields
    form.reset();
} else {
    alert('Please answer all questions.');
}
});
codewar.com
