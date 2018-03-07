import { createStore, Store, combineReducers, Reducer } from 'redux';
import { AppState } from '../models/misc/app-state';
import { reducer as enthusiasmReducer } from './enthusiasm';
import { reducer as userReducer } from './user';

const reducers: Reducer<AppState> = combineReducers({
  enthusiasmLevel: enthusiasmReducer,
  user: userReducer
});

export const store: Store<AppState> = createStore<AppState>(reducers);