import { LoginService } from './../../Services/login.service';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  IsHide: boolean = true;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private myService: LoginService,
    private routeTo: Router,
  ) {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]], //emilys
      password: [null, [Validators.required, Validators.minLength(5)]] //emilyspass
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {

      this.myService.Authenticate(form.value).subscribe({  //form.value = inputs
        next: (response) => {
          localStorage.setItem('token', response.accessToken) // storing token first of all - remove on logout later (34an el guard matboz4)
          this.routeTo.navigate(['/dashboard']);
          this.snackBar.open('Login successful ', 'Close', {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: ['success-snackbar']
          });
          //console.log(response);
        },
        error: (err) => {
          this.snackBar.open('Login failed ', 'Close', {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: ['error-snackbar']
          });
          //console.error(err);
        },
        complete: () => {
            this.loginForm.reset();
        },
      });

    } else {
      form.markAllAsTouched();
      this.snackBar.open('Please fill all required fields ', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
    }
  }
}
