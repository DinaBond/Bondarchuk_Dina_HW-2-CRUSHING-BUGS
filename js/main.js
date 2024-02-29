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