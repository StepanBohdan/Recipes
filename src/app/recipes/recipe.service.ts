import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from "./recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
      new Recipe('Test recipe', 'Delicious meal', 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_1280.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
