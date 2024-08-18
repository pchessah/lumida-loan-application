import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';

// Custom hook to use the dispatch function in the app, typed with AppDispatch.
// This ensures that when dispatching actions, the correct types are enforced.
export const useAppDispatch: () => AppDispatch = useDispatch;

// Custom hook to use the selector function in the app, typed with RootState.
// This ensures that when accessing the state, the correct types are enforced, providing better type safety.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
