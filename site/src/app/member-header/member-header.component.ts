import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-member-header',
  templateUrl: './member-header.component.html',
  styleUrls: [
      '../../assets/css/members.css',
      './member-header.component.css'
  ],
  providers: [LoginService],
})
export class MemberHeaderComponent implements OnInit {

    username: '';

    parentRouter = Router;

  @Input() visitorid: '';
  
  constructor(
      private router: Router,
      private loginService: LoginService,
  ) { }

  ngOnInit() {

  }

}
