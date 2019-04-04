import { BrowserModule }                    from '@angular/platform-browser';
import { HttpClientModule }                 from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule }                         from '@angular/core';
import { StoreModule }                      from '@ngrx/store';
import { StoreRouterConnectingModule }      from '@ngrx/router-store';
import { StoreDevtoolsModule }              from '@ngrx/store-devtools';
import { EffectsModule }                    from '@ngrx/effects';

import { AccountComponent }         from './accounts/account/account.component';
import { AccountsComponent }        from './accounts/accounts.component';
import { AppComponent }             from './app.component';
import { AppRoutingModule }         from './app-routing.module';
import { BasicComponent }           from './basic/basic.component';
import { BasicHighlightDirective }  from './directive/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directive/better-highlight.directive';
import { EditServerComponent }      from './servers/edit-server/edit-server.component';
import { ErrorPageComponent }       from './error-page/error-page.component';
import { FilterPipe }               from './pipes/filter.pipe';
import { FirebaseComponent }        from './firebase/firebase.component';
import { FormsComponent }           from './forms/forms.component';
import { NewAccountComponent }      from './new-account/new-account.component';
import { PipeComponent }            from './pipe/pipe.component';
import { ServerComponent }          from './servers/server/server.component';
import { ServerElementComponent }   from './server-element/server-element.component';
import { ServersComponent }         from './servers/servers.component';
import { ShortenPipe }              from './pipes/shorten.pipe';
import { UnlessDirective }          from './directive/unless.directive';
import { UsersComponent }           from './users/users.component';
import { UserComponent }            from './users/user/user.component';
import { SharedModule }            from './shared/shared.module';
import { ShoppingListModule }      from './shopping-list/shopping-list.module';
import { AuthModule }              from './auth/auth.module';
import { CoreModule }              from './core/core.module';
import { reducers }                from './store/app.reducers';
import { AuthEffects }             from './auth/store/auth.effects';
import { environment }             from '../environments/environment';
import { AnimationComponent }      from './animation/animation.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PostComponent } from './post/post.component';
import { ServiceWorkerModule } from '@angular/service-worker';

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
    NewAccountComponent,
    PipeComponent,
    ServerComponent,
    ServersComponent,
    ServerElementComponent,
    ShortenPipe,
    UnlessDirective,
    UserComponent,
    UsersComponent,
    AnimationComponent,
    PostComponent
  ],
  imports: [
    AuthModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    ShoppingListModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects]),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
