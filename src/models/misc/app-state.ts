import { User } from '../user.model';

export interface AppState {
  enthusiasmLevel: number;
  user: User | null;
}