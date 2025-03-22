import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home-loan-details',
  templateUrl: './user-home-loan-details.component.html',
  styleUrls: ['./user-home-loan-details.component.css'],
})
export class UserHomeLoanDetailsComponent {
  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/landing']);
  }
}
