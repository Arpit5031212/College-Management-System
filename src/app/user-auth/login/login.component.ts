import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;
  //passwordRegex: string = "^ (?=.* [a - z])(?=.* [A - Z])(?=.* [0 - 9])(?=.* [!@#$ %^&* _=+-]).{ 8, 12 }$";
  
  
  ngOnInit() {
    this.loginForm = new FormGroup({
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);
    console.log(form.invalid)
  }

}
