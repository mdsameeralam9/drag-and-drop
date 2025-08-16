export interface NoteInterface {
  title: string;
  content: string;
  id: number;
}

export interface NotesAllDataInterface {
  yetToStart: NoteInterface[];
  progress: NoteInterface[];
  completed: NoteInterface[];
}

export interface CurrentDragingItemInterface {
  dragItemKey: string; // This could be the key of the section the item came from, or the item's unique ID
  dragItem: NoteInterface;
}

