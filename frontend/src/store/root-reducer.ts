import { combineReducers } from '@reduxjs/toolkit';
import mainSlice from './main-process/main-slice';

export const rootReducer = combineReducers({
  ['Main']: mainSlice.reducer,
});