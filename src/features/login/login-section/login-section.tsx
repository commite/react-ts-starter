import * as React from 'react';
import { Grid, Container } from './login-section.styled';
import { LoginForm } from '../login-form/login-form';

export class LoginSectionComponent extends React.Component {

  render(): JSX.Element { return (
    <Grid id="grid">
      <Container id="container">
        <LoginForm/>
      </Container>
    </Grid>
  ); }
}

export const LoginSection = LoginSectionComponent;