import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-log-in',
  templateUrl: './user-log-in.component.html',
})
export class UserLogInComponent {
  formGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  submit() {

    this.resetForm();
    this.formGroup.markAllAsTouched();

    if (this.formGroup.invalid) 
      return

    const credentials = this.formGroup.value as {
      email: string;
      password: string;
    };

    this.auth.signIn(credentials)
  
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm() {
    this.formGroup.setErrors(null);
  }

  constructor(
    private fb: FormBuilder,
    private auth: AuthService
  ) {}
}
