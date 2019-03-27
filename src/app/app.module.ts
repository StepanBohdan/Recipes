import { BrowserModule }                    from '@angular/platform-browser';
import { HttpClientModule }                 from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule }                         from '@angular/core';

import { AccountComponent }         from './accounts/account/account.component';
import { AccountsComponent }        from './accounts/accounts.component';
import { AccountsService }          from './accounts.service';
import { AppComponent }             from './app.component';
import { AppRoutingModule }         from "./app-routing.module";
import { AuthGuardService }         from "./auth-guard.service";
import { AuthService }              from "./auth.service";
import { BasicComponent }           from './basic/basic.component';
import { BasicHighlightDirective }  from './directive/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directive/better-highlight.directive';
import { CanDeactivateGuard }    from "./servers/edit-server/can-deactivate-guard.service";
import { DropdownDirective }     from './shared/dropdown.directive';
import { EditServerComponent }   from './servers/edit-server/edit-server.component';
import { ErrorPageComponent }    from './error-page/error-page.component';
import { DataStorageService }    from "./shared/data-storage.service";
import { HeaderComponent }       from './header/header.component';
import { HomeComponent }         from './home/home.component';
import { FilterPipe }            from './pipes/filter.pipe';
import { FirebaseComponent }     from './firebase/firebase.component';
import { FirebaseServerService } from "./firebase/firebase-server.service";
import { FormsComponent }        from './forms/forms.component';
import { NewAccountComponent }   from './new-account/new-account.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PipeComponent }         from './pipe/pipe.component';
import { RecipeEditComponent }   from './recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent }  from './recipes/recipe-start/recipe-start.component';
import { RecipesComponent }         from './recipes/recipes.component';
import { RecipeDetailComponent }    from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent }      from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent }      from './recipes/recipe-list/recipe-list.component';
import { RecipeService }            from "./recipes/recipe.service";
import { ServerComponent }          from './servers/server/server.component';
import { ServerElementComponent }   from './server-element/server-element.component';
import { ServerResolverService }   from "./servers/server/server-resolver.service";
import { ServersComponent }        from './servers/servers.component';
import { ServersService }          from './servers/servers.service';
import { ShoppingDetailComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListService }   from './shopping-list/shopping-list.service';
import { ShortenPipe }           from './pipes/shorten.pipe';
import { UnlessDirective }       from './directive/unless.directive';
import { UsersComponent }        from './users/users.component';
import { UserComponent }         from './users/user/user.component';

// import { LoggingService } from "./logging.service";

@NgModule({
  declarations: [
    AccountComponent,
    AccountsComponent,
    AppComponent,
    BasicComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    DropdownDirective,
    EditServerComponent,
    ErrorPageComponent,
    FilterPipe,
    FirebaseComponent,
    FormsComponent,
    HeaderComponent,
    HomeComponent,
    NewAccountComponent,
    PageNotFoundComponent,
    PipeComponent,
    RecipesComponent,
    RecipeEditComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    ServerComponent,
    ServersComponent,
    ServerElementComponent,
    ShoppingListComponent,
    ShoppingDetailComponent,
    ShortenPipe,
    UnlessDirective,
    UserComponent,
    UsersComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AccountsService,
    AuthService,
    AuthGuardService,
    CanDeactivateGuard,
    DataStorageService,
    FirebaseServerService,
    RecipeService,
    ShoppingListService,
    ServersService,
    ServerResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
