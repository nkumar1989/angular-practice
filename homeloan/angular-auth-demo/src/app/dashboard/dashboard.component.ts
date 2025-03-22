import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  homeLoans = [
    {
      loanId: 'HL12345',
      borrowerName: 'John Doe',
      loanAmount: '₹25,00,000',
      interestRate: '7.5%',
      tenure: '15',
      status: 'Pending',
    },
    {
      loanId: 'HL67890',
      borrowerName: 'Jane Smith',
      loanAmount: '₹30,00,000',
      interestRate: '8.0%',
      tenure: '20',
      status: 'Pending',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }

  approveLoan(loan: any) {
    loan.status = 'Approved';
    alert(`Loan ${loan.loanId} has been approved.`);
    // You can also send this approval to the backend API
  }

  rejectLoan(loan: any) {
    loan.status = 'Rejected';
    alert(`Loan ${loan.loanId} has been rejected.`);
    // You can also send this rejection to the backend API
  }

  navigateBack() {
    // Logic to go to the previous page
    this.router.navigate(['/landing']); // Replace with the actual route
  }

  navigateNext() {
    // Logic to go to the next page
    this.router.navigate(['/home-loan-offers']); // Replace with the actual route
  }
}
