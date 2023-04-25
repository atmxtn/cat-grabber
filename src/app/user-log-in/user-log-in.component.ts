import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-log-in',
  templateUrl: './user-log-in.component.html',
  styleUrls: ['./user-log-in.component.css']
})
export class UserLogInComponent {
  formGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  submit() {

    this.resetForm();
    this.formGroup.markAllAsTouched();

    if (this.formGroup.invalid) {
      return;
    }

    const credentials = this.formGroup.value as {
      username: string;
      password: string;
    };

    //will return if sign in succeded and then will either throw error or will eepy into next page
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
    private auth: AuthService,
    private router: Router
  ) {}
}
