import { Injectable }    from '@angular/core';
import { HttpClient }    from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe }        from "../recipes/recipe.model";
import { map }           from "rxjs/operators";
import { pipe }          from "rxjs";

@Injectable()
export class DataStorageService {
  private recipeStorageUrl = 'https://recipe-b90c5.firebaseio.com/';

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService) {}

  storeRecipes() {
    return this.httpClient.put(`${this.recipeStorageUrl}/` + 'recipes.json',
      this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.httpClient.get(`${this.recipeStorageUrl}/` + 'recipes.json')
      .pipe(
        map((recipes: Recipe[]) => {
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes
        })
      )
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes)
      })
  }
}
