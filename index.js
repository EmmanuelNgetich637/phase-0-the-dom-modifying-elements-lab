// Write your code here!
// Remove the existing DOM node 'main#main'
const mainElement = document.querySelector('main#main');
if (mainElement) {
    mainElement.remove();
}

// Create a new <h1> node and assign it to the variable newHeader
const newHeader = document.createElement('h1');

// Set the id of the newHeader to 'victory'
newHeader.id = 'victory';

// Set the text content of the newHeader to include your name
newHeader.textContent = 'YOUR-NAME is the champion'; // Replace YOUR-NAME with your actual name

// Append the newHeader to the body or another appropriate parent element
document.body.appendChild(newHeader);