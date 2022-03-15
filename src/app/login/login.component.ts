import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {// implements OnInit

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  //Functions

  login(){
    this.router.navigate(['/home']);
  }

  register(){
    this.router.navigate(['/register']);
  }

  hide = true;
}
