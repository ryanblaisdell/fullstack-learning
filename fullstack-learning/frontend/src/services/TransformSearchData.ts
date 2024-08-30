import { Item, Exercise, SearchResult } from '../interfaces';

export const transformSearchData = (data: { items: Item[], exercises: Exercise[] }): SearchResult => {
    return {
      items: data.items.map((item: Item) => ({
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price,
        title: item.name,
        bodyText: item.description,
        itemPrice: item.price,
      })),
      exercises: data.exercises.map((exercise: Exercise) => ({
        difficulty_level: exercise.difficulty_level,
        equipment_needed: exercise.equipment_needed,
        id: exercise.id,
        instructions: exercise.instructions,
        muscleGroup: exercise.muscleGroup,
        name: exercise.name
      })),
    };
};