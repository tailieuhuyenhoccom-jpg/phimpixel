
export type Grid = string[][];

export interface ReferenceImage {
  id: number;
  title: string;
  url: string;
}

export interface SavedCreation {
  name: string;
  gridSize: number;
  frames: Grid[];
}
