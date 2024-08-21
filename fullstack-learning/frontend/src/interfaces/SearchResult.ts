import { Item } from "./Item";
import { Exercise } from "./Exercises";

export interface SearchResult {
    items: Item[];
    exercises: Exercise[];
}