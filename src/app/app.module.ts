import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClickFieldComponent } from './click-field/click-field.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AuthComponent } from './auth/auth.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {appRoutes} from './app.routing';
import {RouterModule} from '@angular/router';
import {AuthModule} from './auth/auth.module';
import {ClickFieldModule} from './click-field/click-field.module';
import {TopBarModule} from './top-bar/top-bar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AuthModule,
    ClickFieldModule,
    TopBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
