import * as React from 'react';
import { UserService } from '../../../services/user/user.service';

const logo: string = require('./logo.svg');

import { Hello } from '../hello/hello';
import { User } from '../../../models/user.model';
import { AppState } from '../../../models/misc/app-state';
import { connect } from 'react-redux';
import { Grid, Header, Logo, Title, Intro } from './hello-section.styled';
import { store } from '../../../store/app-state';
import * as enthusiasmStore from '../../../store/enthusiasm';

export interface StoreVars {
  user: User | null;
}
export interface Props extends StoreVars {}

class HelloSectionComponent extends React.Component<Props> {
  private userService: UserService = new UserService();

  componentDidMount(): void {
    const userId = 1;

    this.userService.getUser(userId).subscribe();
  }
  render(): JSX.Element {
    const { user = null }: Props = this.props;

    return (      
      <Grid>
        <Header>
          <Logo src={logo} alt="logo" />
          <Title>Welcome to React</Title>
        </Header>
        <Intro>
          To get started, edit <code>src/app.tsx</code> and save to reload.
        </Intro>
        <Hello
          name={user ? user.firstName : ''}
          onIncrementClick={this.onHelloIncrement}
          onDecrementClick={this.onHelloDecrement} 
        />
      </Grid>
    );
  }

  onHelloIncrement = (): void => {
    store.dispatch(enthusiasmStore.increment());
  }
  
  onHelloDecrement = (): void => {
    store.dispatch(enthusiasmStore.decrement());
  }
}

function mapStateToProps(state: AppState): StoreVars {
  return {
    user: state.user
  };
}

export const HelloSection = connect(mapStateToProps)(HelloSectionComponent);