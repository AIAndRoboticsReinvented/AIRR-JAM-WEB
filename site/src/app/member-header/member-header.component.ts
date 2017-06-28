import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
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
    answer = {};
    parentRouter = Router;

    @Input() visitorid: {};
    @Input() navState: {};
    @Output() newNavState: EventEmitter<any> = new EventEmitter<any>(); // Provide a method to send the value to the parent.



  constructor(
      private router: Router,
      private loginService: LoginService,
  ) { }

  
  ngOnInit() {
      this.loginService.getUserName(this.visitorid)
          .subscribe(
          data => this.answer = JSON.parse(data.RequestResult),
          error => {
              console.log(error);
          }, 
          () => {
              
              //this.displayresponse = true;
              //this.response.message = this.answer[0].response;
              //if (this.response.message == 'OK') {
              //    this.router.navigate(['/dashboard', this.answer[0].visitorid])
              //}
              this.username = this.answer[0].username;
          });    

    }

  switchNav(): void {
      if (this.navState == 'Show')
      {
          this.navState = 'Hide';
      }
      else
      {
          this.navState = 'Show';
      }
      this.newNavState.emit(this.navState);   /// Send the new value back up the line.
  }
  isNavState(state): boolean {
      return (state == this.navState);
  }


 }
