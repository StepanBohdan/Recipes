import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AuthGuardService }      from "./auth-guard.service";
import { CanDeactivateGuard }    from "./servers/edit-server/can-deactivate-guard.service";
import { EditServerComponent }   from "./servers/edit-server/edit-server.component";
import { ErrorPageComponent }    from "./error-page/error-page.component";
import { HomeComponent }         from "./home/home.component";
import { ServerComponent }       from "./servers/server/server.component";
import { ServersComponent }      from "./servers/servers.component";
import { UserComponent }         from "./users/user/user.component";
import { UsersComponent }        from "./users/users.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ServerResolverService } from "./servers/server/server-resolver.service";
import { RecipesComponent }      from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes = [
  // { path: '', component: HomeComponent },
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent },
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
