import { Component, OnInit } from '@angular/core';
import { IngredientModel } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[] = [
      new IngredientModel('Potato', 3),
      new IngredientModel('Meal', 1)
  ];

    constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: IngredientModel) {
        this.ingredients.push(ingredient);
  }

}
