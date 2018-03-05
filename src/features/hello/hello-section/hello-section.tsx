import * as React from 'react';
import { UserService } from '../../../services/user/user.service';

const logo: string = require('./logo.svg');

import Hello from '../hello/hello';
import './hello-section.css';
import { User } from 'src/models/user.model';
import { AppState } from 'src/store/app-state';
import { connect } from 'react-redux';

export interface StoreVars {
  user: User | null;
}
export interface Props extends StoreVars {}

class HelloSection extends React.Component<Props> {
  componentDidMount(): void {
    const userService: UserService = new UserService(),
          userId: number = 1;

    userService.getUser(userId).subscribe();
  }
  render(): JSX.Element {
    const { user = null }: Props = this.props;

    return (      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/app.tsx</code> and save to reload.
        </p>
        <Hello name={user ? user.firstName : ''}/>
      </div>
    );
  }
}
export function mapStateToProps(state: AppState): StoreVars {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(HelloSection);