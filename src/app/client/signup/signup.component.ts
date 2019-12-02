import { Component, OnInit, NgZone } from '@angular/core';
import { FormControl, ValidationErrors, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';
import {ValidateService} from '../../shared/validate.service'
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../client.component.scss']
})
export class SignupComponent implements OnInit {
  fullname: String;
  email: String;
  password: String;
  role:String;
  


  constructor(private validateService: ValidateService,
     private flashMessage:FlashMessagesService,
    private authservice:AuthService,
  private router:Router) { }

  ngOnInit() {
  
  }
  onRegisterSubmit(){
    const user = {
      fullname: this.fullname,
      email: this.email,
      password: this.password,
      role: 'client'
    }
    
    // Required Fields
    if(!this.validateService.validateRegister(user)){
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    this.authservice.registerUser(user).subscribe(data=>{
      if(data.success){
        this.flashMessage.show('Successfully Registered', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/signin']);
      }else{
        console.log(data)
        this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/signup']);
      }
    });
 



}








    // Validate Email
}
