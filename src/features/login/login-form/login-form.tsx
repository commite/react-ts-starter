import * as React from 'react';
import { Grid, Form, InputContainer, Button, Label } from './login-form.styled';
import { FormBuilder, FormGroup, FieldGroup, FieldControl, Validators } from 'react-reactive-form';

export interface FormValues {
  email: string;
  password: string;
}

export class LoginFormComponent extends React.Component {

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
              render={({handler, touched, hasError}) => (
                <InputContainer>
                  <Label htmlFor="email">Email</Label>
                  <input {...handler()} id="email" type="text"/>
                  <span> {touched && hasError('required') && 'Email is required'} </span>
                </InputContainer>
              )}
            />
            <FieldControl
              name="password"
              render={({handler, touched, hasError}) => (
                <InputContainer>
                  <Label htmlFor="password">Password</Label>
                  <input {...handler()} id="password" type="password"/>
                  <span> {touched && hasError('required') && 'Email is required'} </span>
                </InputContainer>
              )}
            />            
          </Form>
        )}
      />
      <Button type="submit" form="login-form" value="Submit"/>
    </Grid>
  ); }

  onSubmit (event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (this.loginForm.valid) {
      alert(JSON.stringify(this.loginForm.value));
    }
  }
}

export const LoginForm = LoginFormComponent;