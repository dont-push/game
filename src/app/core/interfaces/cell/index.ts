import { CellCoords } from "../coords";

export interface Cell {
  coords: CellCoords;
  status: 'success' | 'active' | null;
  icon: string;
}
