import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';

import { LoginService } from '../login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService],
})
export class LoginComponent implements OnInit {

    login: '';
    password: '';
    companyid = '0';
    parentRouter = Router;

    response = { message: 'Waiting for user submittion.' };
    answer = {};
    private displayresponse = false;

    constructor(
        private router : Router,
        private loginService: LoginService)
    { }

    ngOnInit() {
    }

    onLoginClick(): void {
      this.loginService.getLogin(this.login, this.password)
          .subscribe(
          data => this.answer = JSON.parse(data.RequestResult),
          error => {
              console.log(error);
          },
          () => {
              this.displayresponse = true;
              this.response.message = this.answer[0].response;
              if (this.response.message == 'OK')
              {
                  console.log(["Visitor", this.answer[0].visitorid]);
                  console.log(["Company", this.companyid]);
                  this.router.navigate(['/dashboard', this.answer[0].visitorid, this.companyid])               
              }

          });    
  }

}
