import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store }                        from '@ngrx/store';
import { Observable, Subscription }     from 'rxjs';

import { IngredientModel }              from '../shared/ingredient.model';
import { ShoppingListService }          from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  shoppingListState: Observable<{ingredients: IngredientModel[]}>;
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService,
              private store: Store<{shoppingList: {ingredients: IngredientModel[]}}>) {
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
  this.shoppingListService.starterEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
