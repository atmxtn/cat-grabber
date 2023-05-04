import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserLogInComponent } from './user-log-in.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [],
  declarations: [UserLogInComponent],
  providers: [],
})
export class UserLogInModule {}
