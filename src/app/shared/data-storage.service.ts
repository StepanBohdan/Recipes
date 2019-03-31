import { Injectable }                                       from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { RecipeService }                                    from '../recipes/recipe.service';
import { Recipe }                                           from '../recipes/recipe.model';
import { map }                                              from 'rxjs/operators';
import { AuthService }                                      from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  private recipeStorageUrl = 'https://recipe-b90c5.firebaseio.com/recipes.json';

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authServise: AuthService) {}

  storeRecipes() {
    const token = this.authServise.getToken();
    // const headers = new HttpHeaders().set('Authorization', 'Recipe value');

    // return this.httpClient.put(`${this.recipeStorageUrl}/`,
    //   this.recipeService.getRecipes(), {
    //   observe: 'body',
    //     params: new HttpParams().set('auth', token)
    //     // headers: headers
    //   });
    const req = new HttpRequest('PUT', `${this.recipeStorageUrl}/`, this.recipeService.getRecipes(),
      {reportProgress: true, params: new HttpParams().set('auth', token)
      })
    return this.httpClient.request(req);
  }

  getRecipes() {
    const token = this.authServise.getToken();
    this.httpClient.get<Recipe[]>(`${this.recipeStorageUrl}/`, {
      params: new HttpParams().set('auth', token)
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
