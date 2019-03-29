import { NgModule }               from '@angular/core';

// import { AccountsService }          from './accounts/accounts.service';
import { HeaderComponent }        from './header/header.component';
import { HomeComponent }          from './home/home.component';
import { SharedModule }           from '../shared/shared.module';
import { AppRoutingModule }       from '../app-routing.module';
import { AccountsService }        from '../accounts.service';
import { AuthService }            from '../auth/auth.service';
import { AuthGuardService }       from '../auth/auth-guard.service';
import { AuthSimpleService }      from '../auth-simple.service';
import { AuthSimpleGuardService } from '../auth-simple-guard.service';
import { CanDeactivateGuard }     from '../servers/edit-server/can-deactivate-guard.service';
import { DataStorageService }     from '../shared/data-storage.service';
import { FirebaseServerService }  from '../firebase/firebase-server.service';
import { RecipeService }          from '../recipes/recipe.service';
import { ShoppingListService }    from '../shopping-list/shopping-list.service';
import { ServersService }         from '../servers/servers.service';
import { ServerResolverService }  from '../servers/server/server-resolver.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    AccountsService,
    AuthService,
    AuthGuardService, //can move to recipes-routing cause use only in one module
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
})
export class CoreModule { }
