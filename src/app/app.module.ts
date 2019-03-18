import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }      from '@angular/forms';
import { NgModule }         from '@angular/core';

import { AccountComponent }         from './account/account.component';
import { AccountsService }          from './accounts.service';
import { AppComponent }             from './app.component';
import { AppRoutingModule }         from "./app-routing.module";
import { AuthGuardService }         from "./auth-guard.service";
import { AuthService }              from "./auth.service";
import { BasicHighlightDirective }  from './directive/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directive/better-highlight.directive';
import { CanDeactivateGuard }       from "./servers/edit-server/can-deactivate-guard.service";
import { DropdownDirective }        from './shared/dropdown.directive';
import { EditServerComponent }      from './servers/edit-server/edit-server.component';
import { ErrorPageComponent }       from './error-page/error-page.component';
import { HeaderComponent }          from './header/header.component';
import { HomeComponent }            from './home/home.component';
import { NewAccountComponent }      from './new-account/new-account.component';
import { PageNotFoundComponent }    from './page-not-found/page-not-found.component';
import { RecipesComponent }         from './recipes/recipes.component';
import { RecipeDetailComponent }    from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent }      from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent }      from './recipes/recipe-list/recipe-list.component';
import { ServerComponent }          from './servers/server/server.component';
import { ServerElementComponent }   from './server-element/server-element.component';
import { ServersService }           from './servers/servers.service';
import { ServersComponent }         from './servers/servers.component';
import { ShoppingDetailComponent }  from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent }    from './shopping-list/shopping-list.component';
import { ShoppingListService }      from './shopping-list/shopping-list.service';
import { UnlessDirective }          from './directive/unless.directive';
import { UsersComponent }           from './users/users.component';
import { UserComponent }            from './users/user/user.component';
// import { LoggingService } from "./logging.service";

@NgModule({
  declarations: [
    AccountComponent,
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    DropdownDirective,
    EditServerComponent,
    ErrorPageComponent,
    HeaderComponent,
    HomeComponent,
    NewAccountComponent,
    PageNotFoundComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ServerComponent,
    ServersComponent,
    ServerElementComponent,
    ShoppingListComponent,
    ShoppingDetailComponent,
    UnlessDirective,
    UserComponent,
    UsersComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AccountsService,
    AuthService,
    AuthGuardService,
    CanDeactivateGuard,
    ShoppingListService,
    ServersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
