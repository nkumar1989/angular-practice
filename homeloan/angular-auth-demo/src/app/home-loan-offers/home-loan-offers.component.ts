import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeLoanOfferService } from '../home-loan-offer.service';

@Component({
  selector: 'app-home-loan-offers',
  templateUrl: './home-loan-offers.component.html',
  styleUrls: ['./home-loan-offers.component.css'],
})
export class HomeLoanOffersComponent implements OnInit {
  offers = [];
  // offers = [
  //   {
  //     offerId: 'O123',
  //     bank: 'Bank A',
  //     interestRate: '7.5%',
  //     maxLoanAmount: '₹50,00,000',
  //     tenure: '20 years',
  //   },
  //   {
  //     offerId: 'O124',
  //     bank: 'Bank B',
  //     interestRate: '8.0%',
  //     maxLoanAmount: '₹40,00,000',
  //     tenure: '15 years',
  //   },
  //   {
  //     offerId: 'O125',
  //     bank: 'Bank C',
  //     interestRate: '7.3%',
  //     maxLoanAmount: '₹60,00,000',
  //     tenure: '25 years',
  //   },
  // ];

  loanOffers: any[] = [];
  errorMessage = '';

  constructor(private loanOfferService: HomeLoanOfferService,private router: Router) {}

  ngOnInit(): void  {
    // Fetch the offers from a backend API here, if required
    this.fetchLoanOffers();
  }

  navigateBack() {
    // Logic to go to the previous page
    this.router.navigate(['/dashboard']); // Replace with the actual route
  }

  navigateNext() {
    // Logic to go to the next page
    this.router.navigate(['/apply-home-loan']); // Replace with the actual route
  }

  applyForLoan(offer: any) {
    // Navigate to the Apply Home Loan Offer page with offer details
    this.router.navigate(['/apply-home-loan'], { state: { offer } });
  }

  fetchLoanOffers() {
    this.loanOfferService.getHomeLoanOffers().subscribe(
      (data) => {
        this.loanOffers = data;
        console.log("data coming from backend::"+this.loanOffers)
      },
      (error) => {
        console.error('Error fetching loan offers:', error);
        this.errorMessage = error.error?.message || 'Failed to load loan offers';
      }
    );
  }
}
