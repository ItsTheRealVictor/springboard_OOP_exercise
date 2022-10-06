class Game {
    constructor(height, width){
      this.height = height
      this.width = width

      this.currPlayer = 1
      this.board = []
    }

    makeBoard(){
        for (let y = 0; y < this.height; y++) {
            board.push(Array.from({ length: this.width }));
          }
    }

    makeHtmlBoard() {
        const board = document.getElementById('board');
      
        // make column tops (clickable area for adding a piece to that column)
        const top = document.createElement('tr');
        top.setAttribute('id', 'column-top');
        top.addEventListener('click', handleClick);
      
        for (let x = 0; x < this.width; x++) {
          const headCell = document.createElement('td');
          headCell.setAttribute('id', x);
          top.append(headCell);
        }
      
        this.board.append(top);
      
        // make main part of board
        for (let y = 0; y < this.height; y++) {
          const row = document.createElement('tr');
      
          for (let x = 0; x < this.width; x++) {
            const cell = document.createElement('td');
            cell.setAttribute('id', `${y}-${x}`);
            row.append(cell);
          }
      
          this.board.append(row);
        }
      }

      findSpotForCol(x) {
        for (let y = this.height - 1; y >= 0; y--) {
          if (!this.board[y][x]) {
            return y;
          }
        }
        return null;
      }

      placeInTable(y, x) {
        const piece = document.createElement('div');
        piece.classList.add('piece');
        piece.classList.add(`p${currPlayer}`);
        piece.style.top = -50 * (y + 2);
      
        const spot = document.getElementById(`${y}-${x}`);
        spot.append(piece);
      }

      endGame(msg) {
        alert(msg);
      }

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
        
        // check for win
        if (this.checkForWin()) {
          return endGame(`Player ${this.currPlayer} won!`);
        }
        
        // check for tie
        if (this.board.every(row => row.every(cell => cell))) {
          return endGame('Tie!');
        }
          
        // switch players
        this.currPlayer = this.currPlayer === 1 ? 2 : 1;
      }
      
  }