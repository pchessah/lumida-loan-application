import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { gql, ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_LOAN_PRODUCTS } from '../features/graphql/queries/GetLoanProducts';
import { LoanApplicationState, LoanProduct } from '../interfaces/Loan';

const initialState: LoanApplicationState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchLoanProducts = createAsyncThunk('loanApplication/fetchLoanProducts', async () => {
  const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache(),
  });

  const response = await client.query({
    query: gql`${GET_LOAN_PRODUCTS}`,
  });

  return response.data.loanProducts as LoanProduct[];
});

const loanApplicationSlice = createSlice({
  name: 'loanApplication',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoanProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLoanProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchLoanProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch loan products';
      });
  },
});

export default loanApplicationSlice.reducer;
