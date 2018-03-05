import * as Actions from './user.actions';
import { User } from '../../models/user.model';

export function user(state: User | null = null, action: Actions.All): User | null {
  switch (action.type) {
    case Actions.SET:
      return (<Actions.Set> action).payload;
    case Actions.CLEAR:
      return null;
    default:
      return state;
  }
}