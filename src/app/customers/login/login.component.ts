import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RegistrationService } from '../../services/registration.service';
import { Login } from '../../models/login';
import { Subscription } from 'rxjs';

import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  error: string = "";
  accountIdError: string = "";
  displayResetPassword: boolean = false;
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
  changePassword: boolean = false;
  resetKey: string;
  _username: string;
  _password: string;

  usernameError: boolean = false;
  passwordError: boolean = false;

  _login: Login = new Login();
  sessionid: string;
  subscription: Subscription;  

  constructor(private _router: Router, private _registrationService: RegistrationService, private sessionService: SessionService ) { }

  ngOnInit() {
  }

/*
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }  
*/

  public customers() {
    this._router.navigate(['/customer/main'])
  }    

  public register() {
    this._router.navigate(['/customer/register'])
  }   
  
  
  onLogin() {
    this.error = "";
    this.accountIdError = "";
    this._username = this.loginForm.value.username;
    this._password = this.loginForm.value.password;
    if (!this.isLoginValidated(this._username, this._password)) {
      this.usernameError = false;
      this.passwordError = false;
      this._login.username = this._username;
      this._login.password = this._password;
      this._registrationService.login(this._login).subscribe();
      this.subscription = this.sessionService.getMessage().subscribe(message => {
        //alert("this is it: - " + message.text);
        if(message.text != "failure" && message.text != "step2")
        {
          this._router.navigate(['/customer/main']);
        }
        else{
          alert("looks bugus!");
          return;
        }
      });
    }
    else{
      this.usernameError = true;
      this.passwordError = true;
    }
  }

  ResetPassword(_resetPassword: boolean) {
    this.displayResetPassword = _resetPassword;
  }

  private isLoginValidated(username: string, password: string): boolean {
    let noError = false;
    if (username === null || password === null) {
      this.error = "You must enter a username/password."
      noError = true;
    } 
    return noError;
  }


  public onCheckUser() {

  }  

}
