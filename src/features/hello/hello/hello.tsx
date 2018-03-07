import * as React from 'react';
import { store } from '../../../store/app-state';
import { AppState } from '../../../models/misc/app-state';
import { connect } from 'react-redux';
import { Hello } from './hello.styled';
import * as enthusiasmStore from '../../../store/enthusiasm';

export interface StoreVars {
  enthusiasmLevel?: number;
}

export interface Props extends StoreVars {
  name: string;  
}

export class HelloComponent extends React.Component<Props> {
  render(): JSX.Element {
    const { name, enthusiasmLevel = 1 }: Props = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <Hello>
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
        <div>
          <button onClick={onDecrement} id="decrement-button"> - </button>
          <button onClick={onIncrement} id="increment-button"> + </button>
        </div>
      </Hello>
    );
  }
}

function getExclamationMarks(numChars: number): string {
  return Array(numChars + 1).join('!');
}

function onIncrement(): void {
  store.dispatch(enthusiasmStore.increment());
}

function onDecrement(): void {
  store.dispatch(enthusiasmStore.decrement());
}

export function mapStateToProps(state: AppState): StoreVars {
  return {
    enthusiasmLevel: state.enthusiasmLevel
  };
}

export default connect(mapStateToProps)(HelloComponent);