import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';


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

    response = { message: 'Waiting For User Submittion.' };
    answer = {};
    private displayresponse = false;

    constructor(
        private router : Router,
        private loginService: LoginService,
        meta: Meta,
        title: Title)
    {
        meta.addTags([

            {
                name: 'author', content: 'ibuyasis.com'
            },
            {
                name: 'keywords', content: 'i buy as is, ibuyasis login, i buy as is login home investment, investment properties, ugly houses, homes for sale, cash now, quick cash, house investment,sell houses online'
            },
            {
                name: 'description', content: 'I Buy As Is, Inc. is a premier real estate solutions company, and since our inception we have been helping homeowners along with improving communities in each city we work in.'
            },
        ])

    }

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
