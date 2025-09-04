import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    if (this.form.invalid) {
      alert('Please fill all the fields correctly!');
      return;
    }
    this.submitted = true;
    setTimeout(() => { 
      this.submitted = false;
      localStorage.setItem("userDetails", JSON.stringify(this.form.value));
      localStorage.setItem('mock_token', 'token');
      this.router.navigate(['/']);
    }, 1000);
  }
}
