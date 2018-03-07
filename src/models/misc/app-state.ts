import { User } from '../user.model';

export interface AppState {
  enthusiasmLevel: number;
  user: User | null;
}

export interface ReduxWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION__: () => AppState;
}