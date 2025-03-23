import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  username: string | null = '';
  role: string | null = '';
   isAdmin: boolean = false;

  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit(): void {
    // Retrieve the username from localStorage
    this.username = localStorage.getItem('username');
    this.role = localStorage.getItem('role');
    // Check if the user is an admin
    this.isAdmin = this.role === 'admin';
    if (!localStorage.getItem('isLoggedIn')) {
      // Redirect to login if not logged in
      this.router.navigate(['/login']);
    }
  }

  logout(): void {
    // Clear stored data and navigate to login
    localStorage.clear();
    this.router.navigate(['/login']);
  }

   applyNow(): void {
    console.log('Redirecting to application form...');
     this.router.navigate(['/home-loan-offers']);
    alert('Redirecting to the application form!');
  }

  getHomeLoanappliedDetails(): void {
    console.log('Redirecting to application form...');
     this.router.navigate(['/dashboard']);
    alert('Redirecting to the HomeLoan Status Details Page!');
  }

  getMyHomeLoanDetails(): void {
    console.log('Navigating to user’s Home Loan Details page...');
    this.router.navigate(['/user-home-loan-details']);
  }
}
