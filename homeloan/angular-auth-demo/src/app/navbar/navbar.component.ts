import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
   loggedInUser: string | null = null; // To hold the username
    userRole: string | null = null; // User Role
  constructor(private router: Router) {}

  ngOnInit() {
    // Retrieve the logged-in user's username from local storage
    this.loggedInUser = localStorage.getItem('username'); // Make sure 'username' is stored on login
    this.userRole = localStorage.getItem('role');// Store 'role' during login
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
     localStorage.removeItem('username');
      localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

  navigateToOffers() {
    this.router.navigate(['/home-loan-offers']); // Navigate to the new component
  }
}
