import { EventEmitter, Injectable } from '@angular/core';
import { IngredientModel }          from '../shared/ingredient.model';
import { Subject }                  from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<IngredientModel[]>();
  private ingredients: IngredientModel[] = [
      new IngredientModel('Potato', 3),
      new IngredientModel('Meal', 1)
  ];

  getIngredients() {
      return this.ingredients.slice();
  }

  addIngredient(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredient: IngredientModel[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...this.ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}

