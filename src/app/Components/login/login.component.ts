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
      username: [null, [Validators.required]],
      password: [null, [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,20}$/)
      ]]
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      //const { username, password } = form.value;
      console.log(form.value);
      // this.authService.login(username, password).subscribe(...)
    } else {
      form.markAllAsTouched();
    }
  }
}
