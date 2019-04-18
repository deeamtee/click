import {Routes} from '@angular/router';
import {AuthGuard} from './auth-service/auth.guard';
import {AppComponent} from './app.component';
import {AuthComponent} from './auth/auth.component';

export const appRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: AppComponent
  },
  {
    path: 'login',
    component: AuthComponent
  }
];
