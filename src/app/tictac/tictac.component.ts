import { Component } from '@angular/core';

@Component({
  selector: 'app-tictac',
  templateUrl: './tictac.component.html',
  styleUrl: './tictac.component.css'
})
export class TictacComponent {
  board = Array(9).fill('')
  currentPlayer = 'X';
  winner = null;

  reset(){
    this.winner = null;
    this.board = Array(9).fill('');
    this.currentPlayer = 'X'
  }
  btnClick(num){
    console.log(num)
    if(!this.winner){
      this.board[num] = this.currentPlayer;

      if(this.isWinner()){
        this.winner = this.currentPlayer;

        alert('Winner is : '+ this.currentPlayer + '!!! Please restart?')
      } else if(this.board.every(cell=>{cell == cell})){
        this.winner = 'draw';
        alert('Game is Draw !!! Please restart?')
      }

      else {
       this.currentPlayer =  this.currentPlayer === 'X' ? 'O' : 'X'
      }
    } else {
      if(confirm('Game is over !!! Do you wants to restart?')){
        this.reset()
      }
    }

}

  isWinner(){
    let winningPosiblities = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    for (const [a,b,c] of winningPosiblities) {
      if (this.board[a] && this.board[a] == this.board[b] && this.board[a] == this.board[c]) {
        return true
      }
    }
    return false;
  }
}
