import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-success',
  templateUrl: './application-success.component.html',
  styleUrls: ['./application-success.component.css'],
})
export class ApplicationSuccessComponent {
  constructor(private router: Router) {}

  goBackToOffers() {
    this.router.navigate(['/home-loan-offers']);
  }
}
