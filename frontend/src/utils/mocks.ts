import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { createAPI } from '../services/api';
import { State } from '../types/state/state-types';

export const mockForecast = [
  { date: '2025-03-09T12:00:00', temperature: 20 },
  { date: '2025-03-10T15:00:00', temperature: 22 },
];

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;
