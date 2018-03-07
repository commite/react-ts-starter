import { createAction, createReducer } from 'redux-act';
import { User } from '../models/user.model';

const defaultState = null;
      
export const set = createAction<User>('[USER] Set'),
             clear = createAction('[USER] Clear'),
             reducer =
              createReducer<User|null>(on => {
                on(set, (state, payload) => payload);
                on(clear, state => state);
              }, defaultState);