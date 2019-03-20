import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { IngredientModel } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

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

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index]
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
