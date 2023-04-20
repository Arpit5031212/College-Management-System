import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;
  
  
  ngOnInit() {
    this.loginForm = new FormGroup({
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern("(?=.*\d)(?=.* [a - z])(?=.* [A - Z]).{ 8,}")]),
    });
  }

  onSubmit(form: FormGroup) {
    console.log('userEmail', form.value.userEmail);
    console.log('password', form.value.password);
  }

}
