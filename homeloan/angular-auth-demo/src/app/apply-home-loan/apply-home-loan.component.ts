import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-apply-home-loan',
  templateUrl: './apply-home-loan.component.html',
  styleUrls: ['./apply-home-loan.component.css'],
})
export class ApplyHomeLoanComponent implements OnInit {
  loanForm!: FormGroup;
  selectedOffer: any;

  constructor(private router: Router,private fb: FormBuilder) {
    // Retrieve the passed offer details from the router state
    const navigation = this.router.getCurrentNavigation();
    this.selectedOffer = navigation?.extras.state?.['offer'];
  }

  ngOnInit() {
    if (!this.selectedOffer) {
      // If no offer was passed, redirect back to the offers page
      this.router.navigate(['/home-loan-offers']);
    }

    // Create the Reactive Form with validations
    this.loanForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

   submitApplication() {
    if (this.loanForm.valid) {
      // Process the form data, e.g., send to an API or handle locally
      console.log('Application Submitted:', this.loanForm.value);
    } else {
      console.error('Form Invalid. Please check validation errors.');
      // Optionally mark all fields as touched to show errors:
      this.loanForm.markAllAsTouched();
    }
    this.router.navigate(['/application-success']);
  }
}
