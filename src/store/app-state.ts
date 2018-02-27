import { createStore, Store, combineReducers, Reducer } from 'redux';
import { enthusiasm } from './enthusiasm/enthusiasm.reducers';

export interface AppState {
  enthusiasmLevel: number;
  languageName: string;
}

const reducers: Reducer<AppState> = combineReducers({
  enthusiasmLevel: enthusiasm
});

export const store: Store<AppState> = createStore<AppState>( reducers, {
  enthusiasmLevel: 1,
  languageName: 'Typescript'
});