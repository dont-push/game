import { Component, OnInit } from '@angular/core';
import { ICON_LIST } from '@static';
import { Cell } from 'src/app/core/interfaces';
import { BoardStateService } from 'src/app/core/services/board-state/board-state.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(
    private boardService: BoardStateService
  ) { }

  ngOnInit(): void {
    this.board = this.boardService.createTable(5,4);
  }
  private icons = ICON_LIST.reverse();
  public board: Cell[][] = []
}
