import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean;
  winner: string;

  constructor(){}

  ngOnInit(){
    this.newGame();
  }

  newGame(){
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }


 //get は、JavaScriptのプロパティを定義するためのキーワードの1つ。get を使用してプロパティを定義すると、そのプロパティは呼び出されたときに特定の処理を実行
  get player(){
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number){
     // インデックスがマスの範囲内であり、かつそのマスが空の場合のみ処理を実行
    if(!this.squares[idx]){
    // splice メソッドを使って、指定されたインデックスのマスに現在のプレーヤーのマークを配置
    // Stard with idx, Delete 1, add this.player
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();
  }

  calculateWinner(){
    //勝つ並び方
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++){
      //ラインの各要素をa, b, cに代入
      const [a, b, c] = lines[i];
      //a, b, cの位置が一致し、nullでない場合、勝利
      if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]){
        return this.squares[a]
      }
    }
    return null;
  }


}
