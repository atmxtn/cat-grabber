import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegisterComponent } from './user-register.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [],
  declarations: [UserRegisterComponent],
  providers: [],
})
export class UserRegisterModule{}
