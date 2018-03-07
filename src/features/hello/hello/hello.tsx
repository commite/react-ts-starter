import * as React from 'react';
import { store } from '../../../store/app-state';
import * as enthusiasmActions from '../../../store/enthusiasm/enthusiasm.actions';
import { AppState } from '../../../store/app-state';
import { connect } from 'react-redux';
import { Hello } from './hello.styled';

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
          <button onClick={onDecrement}> - </button>
          <button onClick={onIncrement}> + </button>
        </div>
      </Hello>
    );
  }
}

function getExclamationMarks(numChars: number): string {
  return Array(numChars + 1).join('!');
}

function onIncrement(): void {
  store.dispatch(enthusiasmActions.incrementEnthusiasm());
}

function onDecrement(): void {
  store.dispatch(enthusiasmActions.decrementEnthusiasm());
}

export function mapStateToProps(state: AppState): StoreVars {
  return {
    enthusiasmLevel: state.enthusiasmLevel
  };
}

export default connect(mapStateToProps)(HelloComponent);