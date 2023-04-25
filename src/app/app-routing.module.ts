import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserSavedCatsComponent } from './user-saved-cats/user-saved-cats.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserLogInComponent } from './user-log-in/user-log-in.component';
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';



// const adminOnly = () => hasCustomClaim('admin');
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['collect-cats']);

const routes: Routes = [
  {
    path: 'app',
    component: NavbarComponent,
    children: [
      {
        path: 'collect-cats',
        component: UserDashboardComponent,
      },
      {
        path: 'saved-cats',
        component: UserSavedCatsComponent,
        
      },
    ],
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  
{
    path: 'login',
    component: UserLogInComponent,
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToDashboard}}
  ,
  {
    path: '',
    redirectTo: 'app/collect-cats',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'app/collect-cats',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
