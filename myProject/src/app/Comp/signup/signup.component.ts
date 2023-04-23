import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  title = 'myProject';

  constructor(private router:Router){}

  goToLogin() {
    this.router.navigate(['/login']);
  }
 
}
