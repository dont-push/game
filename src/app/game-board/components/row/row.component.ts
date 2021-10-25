import { Component, Input, OnInit } from '@angular/core';
import { Cell } from 'src/app/core/interfaces';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  @Input() row: Cell[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
