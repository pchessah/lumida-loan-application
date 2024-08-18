import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Loan {
  id: number;
  amount: number;
  duration: number;
}

interface LoanState {
  loans: Loan[];
}

const initialState: LoanState = {
  loans: [],
};

const loanSlice = createSlice({
  name: 'loan',
  initialState,
  reducers: {
    addLoan: (state, action: PayloadAction<Loan>) => {
      state.loans.push(action.payload);
    },
  },
});

export const { addLoan } = loanSlice.actions;

export default loanSlice.reducer;
