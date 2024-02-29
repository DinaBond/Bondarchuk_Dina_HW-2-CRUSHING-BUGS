
let theButtons = document.querySelectorAll("#buttonHolder img"),
	theHeading = document.querySelector("#headLine h1"),
	puzzleBoard = document.querySelector(".puzzle-board"),
	puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
	dropZones = document.querySelectorAll('.drop-zone'),
	
	draggedPiece;


function changeBGImage() {
	puzzlePieces.forEach(piece => {
	
	document.querySelector('.puzzle-pieces').appendChild(piece);
    });
	
	puzzlePieces.forEach((piece, index) => {
		

		if (index === 0) {
		  piece.src = `images/topLeft${this.id}.jpg`;
		} else if (index === 1) {
		  piece.src = `images/topRight${this.id}.jpg`;
		} else if (index === 2) {
		  piece.src = `images/bottomLeft${this.id}.jpg`;
		} else if (index === 3) {
		  piece.src = `images/bottomRight${this.id}.jpg`;
		}
		 }); 

	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}


function handleStartDrag() { 
	console.log('started dragging this piece:', this);
	
	draggedPiece = this;
}

function handleDragOver(e) { 
	e.preventDefault(); 
	console.log('dragged over me'); 
}

function handleDrop(e) { 
	e.preventDefault();
	console.log('dropped something on me');

	if (this.querySelector('img')) {
		return;
	  }
	
	this.appendChild(draggedPiece);

	
}

theButtons.forEach(button => button.addEventListener("click", changeBGImage));


puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));


dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));