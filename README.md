# Bondarchuk_Dina_HW-2-CRUSHING-BUGS
This repo contains debugged puzzle assignment

# Plan

Puzzle pieces can stand on top of each other:

To solve this bug I have to set the function which tells If one fragment of puzzle is already on the board, it is not possible to put the second one on top. 

Function  if (this.querySelector('img')) { return; } is used to check if the image element is in the drop zone. If so, this will prevent the currently being dragged puzzle piece from ending up in that placement area.


Pieces of one puzzle remain on the board when the background changes:

Here the problem is divided into 2 points: it is necessary for the puzzle pieces to change along with the background change and for them to return to their original position with the same background change.

Each background picture has its own index, so I can set a function in which the puzzle pictures will change with the selected background.

As well as, The first block of code, document.querySelector('.puzzle-pieces').appendChild(piece); 
adds each piece back to the .puzzle-pieces element after it is dragged. The AppendChild method is used to add a Piece element to the end of the .puzzle-pieces element. This is necessary because the drag event removes the fragment from the DOM when it is dragged.



## Installation
This is no installatin required.

## Usage
Open index.html in the browser of your choice.

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History
February 29th, 2024

## Credits
Dina Bondarchuk 

## License
MIT license