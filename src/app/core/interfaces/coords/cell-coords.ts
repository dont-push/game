import { RowCoords } from "./row-coords";

export interface CellCoords extends RowCoords {
  cell: number;
}
