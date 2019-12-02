var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ValidateService } from '../../shared/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
var RegisterComponent = (function () {
    function SignupComponent(validateService, flashMessage) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onRegisterSubmit = function () {
        var user = {
            fullname: this.fullname,
            email: this.email,
            username: this.username,
            password: this.password
        };
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
    };
    return RegisterComponent;
}());
SignupComponent = __decorate([
    Component({
        selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../client.component.scss']
    }),
    __metadata("design:paramtypes", [ValidateService, FlashMessagesService])
], SignupComponent);
export { SignupComponent };
//# sourceMappingURL=../../../../../src/app/client/signup/signup.component.js.map