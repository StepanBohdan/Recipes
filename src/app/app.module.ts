import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent }         from './account/account.component';
import { AccountsService }          from './accounts.service';
import { AppComponent }             from './app.component';
import { BasicHighlightDirective }  from './directive/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directive/better-highlight.directive';
import { DropdownDirective }        from './shared/dropdown.directive';
import { HeaderComponent }          from './header/header.component';
import { HomeComponent }            from './home/home.component';
import { NewAccountComponent }      from './new-account/new-account.component';
import { RecipesComponent }         from './recipes/recipes.component';
import { RecipeDetailComponent }    from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent }      from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent }      from './recipes/recipe-list/recipe-list.component';
import { ServerElementComponent }   from './server-element/server-element.component';
import { ServersComponent }        from './servers/servers.component';
import { ShoppingDetailComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent }   from './shopping-list/shopping-list.component';
import { ShoppingListService }     from './shopping-list/shopping-list.service';
import { UnlessDirective }         from './directive/unless.directive';
import { UsersComponent }          from './users/users.component';
import { UserComponent }           from './users/user/user.component';
import { HttpClientModule }        from '@angular/common/http';
import { ServersService }          from './servers/servers.service';
// import { LoggingService } from "./logging.service";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'servers', component: ServersComponent },
    { path: 'users', component: UsersComponent }
    ];

@NgModule({
  declarations: [
    AccountComponent,
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    DropdownDirective,
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
    UsersComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [
      AccountsService,
    ShoppingListService,
      ServersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
