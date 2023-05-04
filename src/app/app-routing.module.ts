import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserSavedCatsComponent } from './user-saved-cats/user-saved-cats.component';
import { UserLogInComponent } from './user-log-in/user-log-in.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';
import { UserLogInModule } from './user-log-in/user-log-in.module';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserRegisterModule } from './user-register/user-register.module';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['collect-cats']);

const routes: Routes = [
  {
    path: 'collect-cats',
    component: UserDashboardComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'saved-cats',
    component: UserSavedCatsComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'settings',
    component: UserSettingsComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'login',
    component: UserLogInComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToDashboard },
  },
  {
    path: 'register',
    component: UserRegisterComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToDashboard },
  },
  {
    path: '',
    redirectTo: 'collect-cats',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'collect-cats',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), UserLogInModule, UserRegisterModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
