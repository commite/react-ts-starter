import * as React from 'react';
import { Grid, Form, InputContainer, Button, Label, InputError } from './login-form.styled';
import { LoginBody } from '../../../models/api/auth.model';
import { FormBuilder, FormGroup, FieldGroup, FieldControl, Validators } from 'react-reactive-form';

export interface FormValues {
  email: string;
  password: string;
}

interface Props {
  onFormSubmit: (body: LoginBody) => void;
}

export class LoginFormComponent extends React.Component<Props> {

  private loginForm: FormGroup = FormBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  render(): JSX.Element { return (
    <Grid>
      <FieldGroup
        control={this.loginForm}
        render={({get, invalid}) => (
          <Form id="login-form" onSubmit={e => this.onSubmit(e)}>            
            <FieldControl
              name="email"
              render={({handler, touched, hasError, submitted}) => (
                <InputContainer>
                  <Label htmlFor="email">Email</Label>
                  <input {...handler()} id="email" type="text"/>
                  <InputError> {(submitted || touched) && hasError('required') && 'Email is required'} </InputError>
                </InputContainer>
              )}
            />
            <FieldControl
              name="password"
              render={({handler, touched, hasError, submitted}) => (
                <InputContainer>
                  <Label htmlFor="password">Password</Label>
                  <input {...handler()} id="password" type="password"/>
                  <InputError> {(submitted || touched) && hasError('required') && 'Password is required'} </InputError>
                </InputContainer>
              )}
            />            
          </Form>
        )}
      />
      <Button type="submit" form="login-form" value="Submit"/>
    </Grid>
  ); }

  onSubmit =  (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    this.loginForm.markAsSubmitted();
    if (this.loginForm.valid) {
      this.props.onFormSubmit(this.loginForm.value);
    }
  }
}

export const LoginForm = LoginFormComponent;