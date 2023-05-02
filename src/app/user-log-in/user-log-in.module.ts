import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserLogInComponent } from './user-log-in.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [],
  declarations: [UserLogInComponent],
  providers: [],
})
export class UserLogInModule {}
