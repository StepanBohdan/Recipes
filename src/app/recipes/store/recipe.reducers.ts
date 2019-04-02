import { Recipe }          from '../recipe.model';
import { IngredientModel } from '../../shared/ingredient.model';
import * as RecipeActions  from './recipe.actions';
import * as fromApp             from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState{
  recipes: State;
}
export interface State {
  recipes: Recipe[],
}

const initialState: State = {
  recipes: [
    new Recipe(
      'Schnitzel',
      'Delicious meat',
      'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_1280.jpg',
      [
        new IngredientModel('Meat', 1),
        new IngredientModel('French Fries', 30)
      ])
  ]
};

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
  switch (action.type) {
    case (RecipeActions.SET_RECIPES):
      return {
        ...state,
        recipes: [...action.payload]
      };
    case (RecipeActions.ADD_RECIPE):
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case (RecipeActions.UPDATE_RECIPE):
      const recipe = state.recipes[action.payload.index];
      const updatedRecipe = {
        ...recipe,
        ...action.payload.updatedRecipe
      };
      const recipes = [...state.recipes];
      recipes[action.payload.index] = updatedRecipe;
        return {
        ...state,
        recipes: recipes
      };
    case (RecipeActions.DELETE_RECIPE):
      const deletedRecipes = [...state.recipes];
      deletedRecipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: deletedRecipes
      };
    default:
        return state;
  }

}