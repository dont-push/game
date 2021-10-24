import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellComponent } from './components/cell/cell.component';
import { RowComponent } from './components/row/row.component';
import { BoardComponent } from './components/board/board.component';
import { TuiMarkerIconModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [
    CellComponent,
    RowComponent,
    BoardComponent
  ],
  imports: [
    CommonModule,
    TuiMarkerIconModule,
  ],
  exports: [
    BoardComponent
  ]
})
export class GameBoardModule { }
