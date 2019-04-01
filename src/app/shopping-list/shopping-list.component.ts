import { Component, OnInit } from '@angular/core';
import { Store }             from '@ngrx/store';
import { Observable }        from 'rxjs';

import { IngredientModel }       from '../shared/ingredient.model';
import * as ShoppingListReducers from './store/shopping-list.reducers';
import * as ShoppingListActions  from './store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ingredients: IngredientModel[]}>;

  constructor(private store: Store<ShoppingListReducers.AppState>) {
  }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
    // this.subscription = this.shoppingListService.ingredientsChanged
    //   .subscribe(
    //     (ingredients: IngredientModel[]) => {
    //       this.ingredients = ingredients;
    //     }
    //   );
  }

  onEditItem(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

}
