import { Subject }             from "rxjs";

import { Recipe }              from './recipe.model';
import { IngredientModel }     from '../shared/ingredient.model';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
      new Recipe(
          'Schnitzel',
          'Delicious meat',
          'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_1280.jpg',
          [
              new IngredientModel('Meat', 1),
              new IngredientModel('French Fries', 30)
          ])
  ];

  constructor() {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index]
  }

  // addIngredientsToShoppingList(ingredients: IngredientModel[]) {
  //   // this.shoppingListService.addIngredients(ingredients);
  //   this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  // }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
