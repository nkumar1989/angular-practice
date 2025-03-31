export interface HomeLoanOfferDetails{
    homeLoanOfferDetailsId:number;
    processingFee:DoubleRange;
    loanTenure:number;
    loanInterestRate:DoubleRange;
    loanAmount: DoubleRange;
    startDate:Date;
    endDate:Date;
}