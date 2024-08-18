export interface Loan {
  id: number;
  amount: number;
  duration: number;
}

export interface LoanProduct {
  id: number;
  name: string;
  interestRate: number;
  maximumAmount: number;
}

export interface LoanApplicationObject {
  id: number;
  fullName: string;
  email: string;
  loanAmount: number;
  loanPurpose: string;
}
