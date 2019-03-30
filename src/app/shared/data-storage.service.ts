import { Injectable }    from '@angular/core';
import { HttpClient }    from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe }        from "../recipes/recipe.model";
import { map }           from "rxjs/operators";
import { AuthService }   from "../auth/auth.service";

@Injectable()
export class DataStorageService {
  private recipeStorageUrl = 'https://recipe-b90c5.firebaseio.com/';

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authServise: AuthService) {}

  storeRecipes() {
    const token = this.authServise.getToken();
    return this.httpClient.put(`${this.recipeStorageUrl}/` + 'recipes.json?auth=' + token,
      this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authServise.getToken();
    this.httpClient.get(`${this.recipeStorageUrl}/` + 'recipes.json?auth=' + token)
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
