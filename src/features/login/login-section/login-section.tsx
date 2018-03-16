import * as React from 'react';
import { Grid, Container } from './login-section.styled';
import { LoginForm } from '../login-form/login-form';
import { LoginBody } from '../../../models/api/auth.model';
import { AuthService } from '../../../services/auth/auth.service';

export interface Props {
  history: {
    push: (route: string) => void
  };
}

export class LoginSectionComponent extends React.Component<Props> {
  private authService: AuthService = new AuthService();

  componentDidMount(): void {
    localStorage.clear();
    sessionStorage.clear();
  }

  render(): JSX.Element { return (
    <Grid id="grid">
      <Container id="container">
        <LoginForm onFormSubmit={this.onFormSubmit}/>
      </Container>
    </Grid>
  ); }

  onFormSubmit = (body: LoginBody): void => {
    this.authService.login(body).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.props.history.push('/hello');
      },
      err => alert(err.response.data.error)
    );
  }
}

export const LoginSection = LoginSectionComponent;