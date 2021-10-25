import { Component, Inject, Input, OnInit } from '@angular/core';
import { TuiSvgService } from '@taiga-ui/core';
import { TuiMarkerIconModeT } from '@taiga-ui/kit';
import { Cell } from 'src/app/core/interfaces';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {
  @Input() cell: Cell = null;

  public mode: TuiMarkerIconModeT = null;

  constructor() {

  }

  ngOnInit(): void {
  }

  public active() {
    if (this.mode) {
      this.mode = null;
    } else {
      this.mode = 'primary';
    }
  }
}
