import { configureStore } from '@reduxjs/toolkit';
import loanApplicationSlice from './loanApplicationSlice';

// Create and configure the Redux store with the loan application slice as a reducer.
// The store holds the global state of the application and manages updates to it.
export const store = configureStore({
  reducer: {
    // Add the loanApplication slice to the store, managing the state related to loan applications.
    loanApplication: loanApplicationSlice,
  },
});

// Define a type for the root state, which represents the entire Redux state of the application.
export type RootState = ReturnType<typeof store.getState>;

// Define a type for the app's dispatch function, ensuring that it's properly typed.
export type AppDispatch = typeof store.dispatch;
