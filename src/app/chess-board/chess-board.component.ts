import { Component } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'chess-board',
  templateUrl: './chess-board.component.html',
  styleUrl: './chess-board.component.css',
})
export class ChessBoardComponent {
  container = document.getElementById('container');
  box = document.createElement('div');
  pieces = [
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
  ];

  constructor() {
    // for (let i = 0; i < this.pieces.length; i++) {
    //         let row = document.createElement('div')
    //         row.className = 'row';
    //         row.id  = i.toString();
    //         if(this.container != null){
    //           this.container.appendChild(row);
    //         }
    //         for (let j = 0; j < 8; j++) {
    //                 let col = document.createElement('button')
    //                 col.className = ' spDiv col-sm align-content-center justify-content-center fs-1 ';
    //                 col.id = `${j}-${i}`
    //                 if((i+j) % 2 == 0){
    //                   col.style.backgroundColor = '#ffff';
    //                   col.style.color = '#0000';
    //                 }
    //                   // document.getElementById(+ i.toString()).appendChild(col);
    //                   // document.getElementById(`${j}-${i}`).innerHTML = `${this.pieces[i][j]}`;
    //         }
    // }
  }
  getStyle(i: number, j: number) {
    console.log(i, j);
    if ((i + j) % 2 == 0) {
      return { black: true };
    } else {
      return { white: true };
    }
  }
  getColor(i:number, j:number){
    if ((i + j) % 2 == 0) {
      return  'black' ;
    } else {
      return  'white' ;
    }
  }
}
