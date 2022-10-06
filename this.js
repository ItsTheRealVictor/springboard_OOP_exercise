class Game {

    // I wasn't really even close with the constructor. I didn't put any of the methods or the p1/p2, etc.

    //my code 


    // constructor(height, width){
    //   this.height = height
    //   this.width = width

    //   this.currPlayer = 1
    //   this.board = []
    // }


    // end of my code

    //solution code

    constructor(p1, p2, height = 6, width = 7) {
        this.players = [p1, p2];
        this.height = height;
        this.width = width;
        this.currPlayer = p1;
        this.makeBoard();
        this.makeHtmlBoard();
        this.gameOver = false;
    }

    // end of solution code


    makeBoard(){
        // my code. missed declaring this.board, but I did get this.height and this.board

        // for (let y = 0; y < this.height; y++) {
        //     this.board.push(Array.from({ length: this.width }));
        //   }

        // end my code

        // solution code

        this.board = [];
        for (let y = 0; y < this.height; y++) {
          this.board.push(Array.from({ length: this.width }));
        }

        // end solution code
    }

    makeHtmlBoard() {
        const board = document.getElementById('board');
        // I missed this innerHTML setting
        board.innerHTML = ''
      
        // make column tops (clickable area for adding a piece to that column)
        const top = document.createElement('tr');
        top.setAttribute('id', 'column-top');

        // solution code snippet: I completely missed this

        this.handleGameClick = this.handleClick.bind(this);
        top.addEventListener("click", this.handleGameClick);

        // end snippet

      
        for (let x = 0; x < this.width; x++) {
          const headCell = document.createElement('td');
          headCell.setAttribute('id', x);
          top.append(headCell);
        }
      
        // solution snippet: why isn't it "this.board"?

        board.append(top);
        
        // end snippet

        // make main part of board

        // I got this part right in my code 
        for (let y = 0; y < this.height; y++) {
          const row = document.createElement('tr');
      
        for (let x = 0; x < this.width; x++) {
            const cell = document.createElement('td');
            cell.setAttribute('id', `${y}-${x}`);
            row.append(cell);
          }
      
          // solution snippet. Whis isn't it "this.board"?
          board.append(row);
          // end snippet
        }
      }


      // nice! I got this function right.
      findSpotForCol(x) {
        for (let y = this.height - 1; y >= 0; y--) {
          if (!this.board[y][x]) {
            return y;
          }
        }
        return null;
      }


      // nice! I got this function right too. (not actually different from the non-OOP code)
      placeInTable(y, x) {
        const piece = document.createElement('div');
        piece.classList.add('piece');
        piece.style.backgroundColor = this.currPlayer.color

        // no idea what this is for?
        piece.style.top = -50 * (y + 2)


        const spot = document.getElementById(`${y}-${x}`);
        spot.append(piece);
      }


      // Solution code snippet: I missed all of this
      endGame(msg) {
        alert(msg);

        // whats the reason for this?
        const top = document.querySelector("#column-top");
        top.removeEventListener("click", this.handleGameClick);
      }

      // end snippet

      handleClick(evt) {
        // get x from ID of clicked cell
        const x = +evt.target.id;
      
        // get next spot in column (if none, ignore click)
        const y = this.findSpotForCol(x);
        if (y === null) {
          return;
        }
      
        // place piece in board and add to HTML table
        this.board[y][x] = this.currPlayer;
        this.placeInTable(y, x);
        
        this.board[y][x] = this.currPlayer
        this.placeInTable(y, x)

        // check for tie
        if (this.board.every(row => row.every(cell => cell))) {
          return this.endGame('Tie!');
        }

        if (this.checkForWin){
            this.gameOver = true
            return this.endGame(`The ${this.currPlayer.color} player won!`)
        }
          
        // switch players
        // Solution snippet: missed this too
        this.currPlayer = this.currPlayer === this.players[0] ? this.players[1] : this.players[0];
      }
      
      
      checkForWin() {
          function _win(cells) {
              // Check four cells to see if they're all color of current player
              //  - cells: list of four (y, x) cells
              //  - returns true if all are legal coordinates & all match currPlayer
  
              return cells.every(
        ([y, x]) =>
          y >= 0 &&
          y < this.height &&
          x >= 0 &&
          x < this.width &&
          this.board[y][x] === this.currPlayer
          );
    }
    
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        // get "check list" of 4 cells (starting here) for each of the different
        // ways to win
        const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
        const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
        const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
        const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];
        
        // find winner (only checking each win-possibility as needed)
        if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
          return true;
        }
      }
    }
}
}

// nice! I got this
class Player{
    constructor(color){
        this.color = color
    }
}

// missed all this stuff
document.getElementById('start-game').addEventListener('click', () => {
let p1 = new Player(document.getElementById('p1-color').value)
let p2 = new Player(document.getElementById('p2-color').value)
new Game(p1, p2)
})