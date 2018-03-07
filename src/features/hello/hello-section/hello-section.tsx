import * as React from 'react';
import { UserService } from '../../../services/user/user.service';

const logo: string = require('./logo.svg');

import Hello from '../hello/hello';
import { User } from '../../../models/user.model';
import { AppState } from '../../../models/misc/app-state';
import { connect } from 'react-redux';
import { App, Header, Logo, Title, Intro } from './hello-section.styled';

export interface StoreVars {
  user: User | null;
}
export interface Props extends StoreVars {}

class HelloSection extends React.Component<Props> {
  componentDidMount(): void {
    const userService = new UserService(),
          userId = 1;

    userService.getUser(userId).subscribe();
  }
  render(): JSX.Element {
    const { user = null }: Props = this.props;

    return (      
      <App>
        <Header>
          <Logo src={logo} alt="logo" />
          <Title>Welcome to React</Title>
        </Header>
        <Intro>
          To get started, edit <code>src/app.tsx</code> and save to reload.
        </Intro>
        <Hello name={user ? user.firstName : ''}/>
      </App>
    );
  }
}
export function mapStateToProps(state: AppState): StoreVars {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(HelloSection);