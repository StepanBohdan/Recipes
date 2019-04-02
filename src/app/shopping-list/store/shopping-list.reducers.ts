import * as ShoppingListActions from './shopping-list.actions';

import { IngredientModel }     from '../../shared/ingredient.model';

export interface AppState {
  shoppingList: State;
}

export interface State {
  ingredients: IngredientModel[];
  editedIngredient: IngredientModel;
  editedIngredientIndex: number;
}
const initialState: State = {
  ingredients: [
    new IngredientModel('Potato', 3),
    new IngredientModel('Meal', 1)
  ],
  editedIngredient: null,
  editedIngredientIndex: -1,
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions
  .ShoppingListActions) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
      case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      };
      case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[state.editedIngredientIndex];
      const updateIngredient = {
        ...ingredient,
        ...action.payload.ingredient
      };
      const ingredients = [...state.ingredients];
      ingredients[state.editedIngredientIndex] = updateIngredient;
      return {
        ...state,
        ingredients,
          editedIngredient: null,
          editedIngredientIndex: -1
      };
      case ShoppingListActions.DELETE_INGREDIENT:
      const oldIngredients = [...state.ingredients];
      oldIngredients.splice(state.editedIngredientIndex, 1);
      return {
        ...state,
        ingredients: oldIngredients,
          editedIngredient: null,
          editedIngredientIndex: -1
      };
        case ShoppingListActions.START_EDIT:
        const editedIngredient = {...state.ingredients[action.payload]};
        return {
        ...state,
            editedIngredient,
            editedIngredientIndex: action.payload
      };
          case ShoppingListActions.STOP_EDIT:
            return {
              ...state,
            editedIngredient: null,
            editedIngredientIndex: -1
          };
    default:
      return state;
  }
}
