import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

const checkPasswords: ValidatorFn = (
  group: AbstractControl
): ValidationErrors | null => {
  let pass = group.get('password')?.value;
  let confirmPass = group.get('repeatPassword')?.value;

  return pass === confirmPass ? null : { notSame: true };
};

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
})
export class UserRegisterComponent {
  formGroup = this.fb.group(
    {
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
    },
    { validators: checkPasswords }
  );

  submit() {
    this.resetForm();
    this.formGroup.markAllAsTouched();

    const value = this.formGroup.value as {
      email: string;
      password: string;
      repeatPassword: string;
    };

    if (this.formGroup.invalid || value.password != value.repeatPassword)
      return;

      this.auth.registerUser(value)
  
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
