import { createStore, Store, combineReducers, Reducer } from 'redux';
import { AppState, ReduxWindow } from '../models/misc/app-state';
import { reducer as enthusiasmReducer } from './enthusiasm';
import { reducer as userReducer } from './user';
import env from '../environment/environment';

const reduxWindow = <ReduxWindow> window,
      mustLoadDevTools = env.devTools && reduxWindow.__REDUX_DEVTOOLS_EXTENSION__;

const reducers: Reducer<AppState> = combineReducers({
  enthusiasmLevel: enthusiasmReducer,
  user: userReducer
});

export const store: Store<AppState> = !mustLoadDevTools ?
  createStore<AppState>(
    reducers
  ) :
  createStore<AppState>(
    reducers,
    reduxWindow.__REDUX_DEVTOOLS_EXTENSION__()
  );