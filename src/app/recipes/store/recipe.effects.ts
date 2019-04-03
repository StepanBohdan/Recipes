import { Actions, Effect, ofType }        from '@ngrx/effects';
import { Injectable }                     from '@angular/core';
import { HttpClient, HttpRequest }        from '@angular/common/http';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Store }                          from '@ngrx/store';

import * as RecipeActions from '../store/recipe.actions'
import * as fromRecipe    from '../store/recipe.reducers'
import { Recipe }         from '../recipe.model';

@Injectable()
export class RecipeEffects {
  private recipeStorageUrl = 'https://recipe-b90c5.firebaseio.com/recipes.json';

  @Effect()
  recipeFetch = this.actions$
    .pipe(
      ofType(RecipeActions.FETCH_RECIPES),
      switchMap((action: RecipeActions.FetchRecipes) => {
        return this.httpClient.get<Recipe[]>(`${this.recipeStorageUrl}/`, {
          observe: 'body',
          responseType: 'json'
        })
      }),
      map((recipes) => {
        for (const recipe of recipes) {
          if (!recipe.ingredients) {
            recipe.ingredients = [];
          }
        }
        return {
          type: RecipeActions.SET_RECIPES,
          payload: recipes
        };
      }));

  @Effect({dispatch: false})
  recipeStore = this.actions$
    .pipe(
      ofType(RecipeActions.STORE_RECIPES),
      withLatestFrom(this.store.select('recipes')),
      switchMap(([action, state]) => {
        const req = new HttpRequest('PUT', `${this.recipeStorageUrl}/`, state.recipes,
          {reportProgress: true});
        return this.httpClient.request(req);
      })
    );


  constructor(private actions$: Actions,
              private httpClient: HttpClient,
              private store: Store<fromRecipe.FeatureState>) {}
}