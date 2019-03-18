import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpClientModule }        from '@angular/common/http';

import { AccountComponent }         from './account/account.component';
import { AccountsService }          from './accounts.service';
import { AppComponent }             from './app.component';
import { BasicHighlightDirective }  from './directive/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directive/better-highlight.directive';
import { DropdownDirective }        from './shared/dropdown.directive';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { HeaderComponent }          from './header/header.component';
import { HomeComponent }            from './home/home.component';
import { NewAccountComponent }      from './new-account/new-account.component';
import { RecipesComponent }         from './recipes/recipes.component';
import { RecipeDetailComponent }    from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent }      from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent }      from './recipes/recipe-list/recipe-list.component';
import { ServerElementComponent }   from './server-element/server-element.component';
import { ServersService }          from './servers/servers.service';
import { ServersComponent }        from './servers/servers.component';
import { ShoppingDetailComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent }   from './shopping-list/shopping-list.component';
import { ShoppingListService }     from './shopping-list/shopping-list.service';
import { UnlessDirective }         from './directive/unless.directive';
import { UsersComponent }          from './users/users.component';
import { UserComponent }           from './users/user/user.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from "./app-routing.module";
// import { LoggingService } from "./logging.service";

@NgModule({
  declarations: [
    AccountComponent,
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    DropdownDirective,
    EditServerComponent,
    HeaderComponent,
    HomeComponent,
    NewAccountComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ServersComponent,
    ServerElementComponent,
    ShoppingListComponent,
    ShoppingDetailComponent,
    UnlessDirective,
    UserComponent,
    UsersComponent,
    ServerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AccountsService,
    ShoppingListService,
    ServersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
