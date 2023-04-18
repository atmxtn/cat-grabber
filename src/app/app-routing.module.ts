import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';


@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'dashboard',
      component: UserDashboardComponent
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
      
    }
  ]),
UserDashboardModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
