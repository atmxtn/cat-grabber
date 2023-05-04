import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
})
export class UserSettingsComponent {

  constructor(private auth: AuthService){}

  signOut(){
    this.auth.signOut()
  }

}
