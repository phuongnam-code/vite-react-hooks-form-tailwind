import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';

export default configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.MODE === 'development',
});
