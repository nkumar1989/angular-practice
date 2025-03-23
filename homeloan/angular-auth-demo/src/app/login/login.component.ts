import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  role= '';
  errorMessage = '';

  constructor(private authService: AuthService,private router: Router) {
    this.role='admin';
  }

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('isLoggedIn', 'true');
       localStorage.setItem('username', this.username); // Store username
       localStorage.setItem('role', this.role);
        this.router.navigate(['/landing']);
      },
      (error: any) => {
        this.errorMessage = 'Invalid username or password';
      }
    );
  }
}





