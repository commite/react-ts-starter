import * as React from 'react';
import { AppState } from '../../../models/misc/app-state';
import { connect } from 'react-redux';
import { Hello } from './hello.styled';
export interface StoreVars {
  enthusiasmLevel?: number;
}

export interface Props extends StoreVars {
  name: string;
  onIncrementClick: () => void;
  onDecrementClick: () => void;
}

export class HelloComponent extends React.Component<Props> {
  render(): JSX.Element {
    const { name, enthusiasmLevel = 1, onIncrementClick, onDecrementClick }: Props = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <Hello>
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
        <div>
          <button onClick={onDecrementClick} id="decrement-button"> - </button>
          <button onClick={onIncrementClick} id="increment-button"> + </button>
        </div>
      </Hello>
    );
  }
}

function getExclamationMarks(numChars: number): string {
  return Array(numChars + 1).join('!');
}

export function mapStateToProps(state: AppState): StoreVars {
  return {
    enthusiasmLevel: state.enthusiasmLevel
  };
}

export default connect(mapStateToProps)(HelloComponent);