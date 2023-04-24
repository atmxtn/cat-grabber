import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserSavedCatsComponent } from './user-saved-cats/user-saved-cats.component';


@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'collect-cats',
      component: UserDashboardComponent
    },
    {
      path: 'saved-cats',
      component: UserSavedCatsComponent
    },
    {
      path: '',
      redirectTo: 'collect-cats',
      pathMatch: 'full'
    }
  ]),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
