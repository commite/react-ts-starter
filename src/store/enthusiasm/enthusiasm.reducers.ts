import * as Actions from './enthusiasm.actions';

export function enthusiasm(state: number = 0, action: Actions.All): number {
  switch (action.type) {
    case Actions.INCREMENT_ENTHUSIASM:
      return state + 1;
    case Actions.DECREMENT_ENTHUSIASM:
      return state - 1;
    default:
      return state;
  }
}