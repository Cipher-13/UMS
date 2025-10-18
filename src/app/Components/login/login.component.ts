import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  IsHide: boolean = true;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.minLength(8)
      ]],
      pass: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) // 8+ letters & numbers
      ]]
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      const { email, pass } = form.value;
      console.log('Login Data:', { email, pass });
      // You can call your API service here
      // this.authService.login(email, pass).subscribe(...)
    } else {
      form.markAllAsTouched();
    }
  }
}
