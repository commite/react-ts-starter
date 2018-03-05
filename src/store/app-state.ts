import { createStore, Store, combineReducers, Reducer } from 'redux';
import { enthusiasm } from './enthusiasm/enthusiasm.reducers';
import { user } from './user/user.reducers';
import { User } from 'src/models/user.model';

export interface AppState {
  enthusiasmLevel: number;
  user: User | null;
}

const reducers: Reducer<AppState> = combineReducers({
  enthusiasmLevel: enthusiasm,
  user: user
});

export const store: Store<AppState> = createStore<AppState>( reducers, {
  enthusiasmLevel: 1,
  user: null
});