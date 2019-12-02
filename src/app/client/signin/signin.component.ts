import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/auth.service';
import { HomepageComponent } from '../homepage/homepage.component';
import { SignupComponent } from '../signup/signup.component';
import { Router } from '@angular/router';
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['../client.component.scss']

})

export class SigninComponent implements OnInit {

        email: string;
        password: string;
   
   

    constructor( public authService: AuthService, private router: Router,
        private flashMessage:FlashMessagesService) {

    }
    ngOnInit(){}
      onLoginSubmit(){
        const user={
          email:this.email,
          password:this.password
        } 
        this.authService.authenticateUser(user).subscribe(data=>{
          if (data.success) {
            this.authService.storeUserData(data.token,data.user);
            this.flashMessage.show('Your now logged in', { cssClass: 'alert-success', timeout: 3000 });
            this.router.navigate(['']);
          } else {
            this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            this.router.navigate(['/signin']);
          }
        });
      }  


}







