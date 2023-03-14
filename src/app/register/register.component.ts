import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  email = new FormControl('', [Validators.required, Validators.email, Validators.pattern(/\.com/)]);
  password = new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&]).{8,32}$/)]);
  confirmPassword = new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&]).{8,32}$/)]);

  ngOnInit(): void {
  }
  
  hide = true;

  getUsernameErrorMessage() {
    
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    if(this.email.hasError('email')){
      return 'Not a valid email';
    } 

    if (this.email.hasError('pattern')) {
      return 'The email has to have a valid value. Ex.: gmail.com';
    }

    return '';
  }

  getPasswordErrorMessage(){


    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }

    if (this.password.hasError('pattern')) {
      
      if(!this.password.value.match(/\d/)){
        return 'Password needs at least one digit';
      }

      if(!this.password.value.match(/[a-z]/)){
        return 'Password needs at least one lowercase character';
      }

      if(!this.password.value.match(/[A-Z]/)){
        return 'Password needs at least one uppercase character';
      }

      if(!this.password.value.match(/(?=.*[@$!%*#?&])/)){
        return 'Password needs at least one special character';
      }

      if(!this.password.value.match(/^.{8,32}$/)){
        return 'Password needs at least 8 characters length and 32 at maximum.';
      }
    }

    return '';
  }
}
