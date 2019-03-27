import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AccountComponent }    from "./accounts/account/account.component";
import { AccountsComponent }     from "./accounts/accounts.component";
import { AuthGuardService }    from "./auth-guard.service";
import { BasicComponent }        from "./basic/basic.component";
import { CanDeactivateGuard }  from "./servers/edit-server/can-deactivate-guard.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ErrorPageComponent }  from "./error-page/error-page.component";
import { FirebaseComponent }     from "./firebase/firebase.component";
import { FormsComponent }        from "./forms/forms.component";
import { HomeComponent }       from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PipeComponent }         from "./pipe/pipe.component";
import { ServerResolverService } from "./servers/server/server-resolver.service";
import { SignupComponent }       from "./auth/signup/signup.component";
import { SigninComponent }       from "./auth/signin/signin.component";
import { RecipesComponent }      from "./recipes/recipes.component";
import { RecipeStartComponent }  from "./recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent }   from "./recipes/recipe-edit/recipe-edit.component";
import { ServerComponent }       from "./servers/server/server.component";
import { ServersComponent }      from "./servers/servers.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { UserComponent }         from "./users/user/user.component";
import { UsersComponent }        from "./users/users.component";

const appRoutes: Routes = [
  // { path: '', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'accounts', component: AccountsComponent },
  { path: 'basic', component: BasicComponent },
  { path: 'firebase', component: FirebaseComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: FormsComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent }
    ]},
  { path: 'shopping-list', component: ShoppingListComponent},

  { path: 'servers',
    canActivateChild: [AuthGuardService],
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent, resolve: {server: ServerResolverService} },
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
    ] },
  { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }
    ]
  },
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: { message: "Not found" } },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: '**', redirectTo: '/not-found' },
];
@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
