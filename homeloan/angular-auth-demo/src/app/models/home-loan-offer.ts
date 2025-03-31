import { HomeLoanOfferDetails } from "./home-loan-offer-details";

export interface HomeLoanOffer{
    homeLoanOfferId:number;
    loanInterestRate:DoubleRange;
    loanAmount:number;
    //loanType:string;
    //validUpTo:Date;
   // homeLoanOfferDetails:HomeLoanOfferDetails;
}

