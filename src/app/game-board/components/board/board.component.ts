import { Component, OnInit } from '@angular/core';
import { ICON_LIST } from '@static';
import { Observable } from 'rxjs';
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
  }

  public board$: Observable<Cell[][]> = this.boardService.grid$;;
}
