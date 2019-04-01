import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm }                                  from '@angular/forms';
import { Store }                                   from "@ngrx/store";
import { Subscription }                            from 'rxjs';

import { IngredientModel }                         from '../../shared/ingredient.model';
import { ShoppingListService }                     from '../shopping-list.service';
import * as ShoppingListActions                    from '../store/shopping-list.actions';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: IngredientModel;

  constructor(private shoppingListService: ShoppingListService,
              private store: Store<{shoppingList: {ingredients: IngredientModel[]}}>) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.starterEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shoppingListService.getIngredient(index);
          this.shoppingListForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new IngredientModel(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient)
    } else {
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }
    this.editMode = false;
    form.reset();
  }

  onClearItem() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onDeleteItem() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClearItem();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
