import { createAction, createReducer } from 'redux-act';

const defaultState = 1;
      
export const increment = createAction('[ENTHUSIASM] Increment'),
             decrement = createAction('[ENTHUSIASM] Decrement'),
             reducer =
              createReducer<number>(on => {
                on(increment, state => state + 1);
                on(decrement, state => state - 1);
              }, defaultState);