import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
 
  public operators() {
    this._router.navigate(['operator/main'])
  }
  
  public register() {
    this._router.navigate(['operator/register'])
  }  

}
