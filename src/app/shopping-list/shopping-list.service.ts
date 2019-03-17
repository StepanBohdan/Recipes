import { EventEmitter, Injectable } from '@angular/core';
import { IngredientModel } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<IngredientModel[]>();
  private ingredients: IngredientModel[] = [
      new IngredientModel('Potato', 3),
      new IngredientModel('Meal', 1)
  ];

  getIngredients() {
      return this.ingredients.slice();
  }

  addIngredient(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredient: IngredientModel[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...this.ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}

