import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  role= '';

  constructor(private router: Router) {
    this.role='admin';
  }

  login() {
    if (this.username === 'Hiramani Kumar' && this.password === 'password') {
      localStorage.setItem('isLoggedIn', 'true');
       localStorage.setItem('username', this.username); // Store username
       localStorage.setItem('role', this.role);
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid Credentials');
    }
  }
}





