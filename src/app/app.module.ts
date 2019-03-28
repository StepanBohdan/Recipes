import { BrowserModule }                    from '@angular/platform-browser';
import { HttpClientModule }                 from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule }                         from '@angular/core';

import { AccountComponent }         from './accounts/account/account.component';
import { AccountsComponent }        from './accounts/accounts.component';
import { AccountsService }          from './accounts.service';
import { AppComponent }             from './app.component';
import { AppRoutingModule }         from './app-routing.module';
import { AuthGuardService }         from './auth/auth-guard.service';
import { AuthSimpleGuardService }   from './auth-simple-guard.service';
import { AuthSimpleService }        from './auth-simple.service';
import { AuthService }              from './auth/auth.service';
import { BasicComponent }           from './basic/basic.component';
import { BasicHighlightDirective }  from './directive/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directive/better-highlight.directive';
import { CanDeactivateGuard }       from './servers/edit-server/can-deactivate-guard.service';
import { EditServerComponent }      from './servers/edit-server/edit-server.component';
import { ErrorPageComponent }       from './error-page/error-page.component';
import { DataStorageService }       from './shared/data-storage.service';
import { HeaderComponent }          from './header/header.component';
import { HomeComponent }            from './home/home.component';
import { FilterPipe }               from './pipes/filter.pipe';
import { FirebaseComponent }        from './firebase/firebase.component';
import { FirebaseServerService }    from './firebase/firebase-server.service';
import { FormsComponent }           from './forms/forms.component';
import { NewAccountComponent }      from './new-account/new-account.component';
import { PipeComponent }            from './pipe/pipe.component';
import { RecipeService }            from './recipes/recipe.service';
import { ServerComponent }          from './servers/server/server.component';
import { SigninComponent }          from './auth/signin/signin.component';
import { SignupComponent }          from './auth/signup/signup.component';
import { ServerElementComponent }   from './server-element/server-element.component';
import { ServerResolverService }    from './servers/server/server-resolver.service';
import { ServersComponent }         from './servers/servers.component';
import { ServersService }           from './servers/servers.service';
import { ShoppingListService }   from './shopping-list/shopping-list.service';
import { ShortenPipe }           from './pipes/shorten.pipe';
import { UnlessDirective }       from './directive/unless.directive';
import { UsersComponent }        from './users/users.component';
import { UserComponent }         from './users/user/user.component';
import { RecipesModule }         from './recipes/recipes.module';
import { SharedModule }          from './shared/shared.module';
import { ShoppingListModule }    from "./shopping-list/shopping-list.module";

// import { LoggingService } from './logging.service';

@NgModule({
  declarations: [
    AccountComponent,
    AccountsComponent,
    AppComponent,
    BasicComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    EditServerComponent,
    ErrorPageComponent,
    FilterPipe,
    FirebaseComponent,
    FormsComponent,
    HeaderComponent,
    HomeComponent,
    NewAccountComponent,
    PipeComponent,
    ServerComponent,
    ServersComponent,
    ServerElementComponent,
    ShortenPipe,
    UnlessDirective,
    UserComponent,
    UsersComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RecipesModule,
    SharedModule,
    ShoppingListModule
  ],
  providers: [
    AccountsService,
    AuthService,
    AuthGuardService,
    AuthSimpleService,
    AuthSimpleGuardService,
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
