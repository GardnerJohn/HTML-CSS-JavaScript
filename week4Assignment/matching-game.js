let numberOfFaces = 5; // Starting number of images
const theLeftSide = document.querySelector('#leftSide');
const theRightSide = document.querySelector('#rightSide');

// Create random number of images on each correct answer
function generateFaces() {
	for (let i = 0; i < numberOfFaces; i++) {
		let face = document.createElement('img');
		face.src = 'samurai-min.png';
		// Equation for random placement of images
		let randomTop = Math.floor(Math.random() * 400 + 1);
		let randomLeft = Math.floor(Math.random() * 400 + 1);

		face.style.top = randomTop + 'px';
		face.style.left = randomLeft + 'px';
		theLeftSide.appendChild(face);
	}
	// Clone the left side for the right minus one image
	const leftSideImages = theLeftSide.cloneNode(true);
	leftSideImages.removeChild(leftSideImages.lastElementChild);
	theRightSide.appendChild(leftSideImages);

	// Add event listerners for left and right side.
	theLeftSide.lastChild.addEventListener('click', nextLevel);
	document.body.addEventListener('click', gameOver);
}

// For the next level on correct answers
function nextLevel(event) {
	event.stopPropagation();
	numberOfFaces += 5; // add 5 images more on each correct answer

	// Remove the left and right images before starting next level
	while (theLeftSide.firstChild) {
		theLeftSide.removeChild(theLeftSide.firstChild);
	}
	while (theRightSide.firstChild) {
		theRightSide.removeChild(theRightSide.firstChild);
	}
	// Initiate the next level
	generateFaces();
}

// Function for end of game sequence
function gameOver() {
	alert(`Game Over! Press OK to play again.`); // Let player know that the game has ended

	// Stop both event listeners
	theLeftSide.lastChild.removeEventListener('click', nextLevel);
	document.body.removeEventListener('click', gameOver);

	// Remove the node children for the left and right sides
	while (theLeftSide.firstChild) {
		theLeftSide.removeChild(theLeftSide.firstChild);
	}
	while (theRightSide.firstChild) {
		theRightSide.removeChild(theRightSide.firstChild);
	}
	numberOfFaces = 5; // Reset the number of faces for new game
	generateFaces(); // Start new game
}
