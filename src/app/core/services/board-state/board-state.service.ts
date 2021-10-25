import { Injectable } from '@angular/core';
import { ICON_LIST } from '@static';
import { Cell } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class BoardStateService {

  constructor() {}

  createTable(w: number, h: number) {
    const row = Array(h).fill([]).map((a, index) => {
      const cells = Array(w).fill(null).map((x, i): Cell => ({
        coords: {
          cell: i,
          row: index,
        },
        icon: ICON_LIST[i+index],
        status: null
      }));

      return cells;
    });

    return row;
  }
}
