import { Injectable } from '@angular/core';
import { IngredientModel } from "../shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
    private ingredients: IngredientModel[] = [
        new IngredientModel('Potato', 3),
        new IngredientModel('Meal', 1)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: IngredientModel) {
      this.ingredients.push(ingredient);
    }
}

