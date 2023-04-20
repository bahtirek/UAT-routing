import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  get confirmPassword() {
    return this.loginForm.get('confirmPassword');
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
    confirmPassword: ['', [Validators.required]]
  }, {
    validator: this.passwordMatchValidator
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');
    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMatch: true });
    } else {
      confirmPassword.setErrors(null);
    }
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }

}
