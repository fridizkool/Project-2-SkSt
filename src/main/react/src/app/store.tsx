import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'; // Import combineReducers if you have reducers
import counterReducer from '../features/counter/counterSlice'

// Define the type for the RootState
export type RootState = ReturnType<typeof rootReducer>;

// Define your rootReducer (replace `{}` with your actual reducers)
const rootReducer = combineReducers({
  // Your reducers go here
  counter: counterReducer
});

// Create and export your Redux store with the rootReducer
const store: EnhancedStore<RootState> = configureStore({
  reducer: rootReducer,
});

export default store;
