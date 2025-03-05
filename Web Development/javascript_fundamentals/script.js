// Use modern ES6 features: let, const, arrow functions
const button = document.getElementById('myButton');
const messageEl = document.getElementById('message');

// Define an arrow function to update text content
const updateMessage = () => {
  messageEl.textContent = "Text updated on button click!";
};

// Add an event listener to trigger the update on click
button.addEventListener('click', updateMessage);
