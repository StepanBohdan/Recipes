import { Injectable }                                       from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { map }                                              from 'rxjs/operators';

import { RecipeService }                                    from '../recipes/recipe.service';
import { Recipe }                                           from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  private recipeStorageUrl = 'https://recipe-b90c5.firebaseio.com/recipes.json';

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService) {}

  storeRecipes() {
    // const headers = new HttpHeaders().set('Authorization', 'Recipe value');

    // return this.httpClient.put(`${this.recipeStorageUrl}/`,
    //   this.recipeService.getRecipes(), {
    //   observe: 'body',
    //     params: new HttpParams().set('auth', token)
    //     // headers: headers
    //   });
    const req = new HttpRequest('PUT', `${this.recipeStorageUrl}/`, this.recipeService.getRecipes(),
      {reportProgress: true});
    return this.httpClient.request(req);
  }

  getRecipes() {
    this.httpClient.get<Recipe[]>(`${this.recipeStorageUrl}/`, {
      observe: 'body',
      responseType: 'json'
    })
      .pipe(
        map((recipes) => {
          for (const recipe of recipes) {
            if (!recipe.ingredients) {
              recipe.ingredients = [];
            }
          }
          return recipes;
        })
      )
      .subscribe((recipes) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
