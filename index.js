// Step 1: Remove the main#main node
const mainNode = document.querySelector('main#main');
mainNode.remove();

// Step 2: Create the new header node
const newHeader = document.createElement('h1');

// Step 3: Set the id of the new header node to 'victory'
newHeader.setAttribute('id', 'victory');

// Step 4: Set the text of the new header node to include the name of the champion
const name = 'YOUR-NAME'; // Replace with your actual name
newHeader.textContent = `${name} is the champion`;

// Add the new header node to the document's body
document.body.appendChild(newHeader);
