import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/app-state';
import { BrowserRouter } from 'react-router-dom';

import { HelloSection } from './features/hello/hello-section/hello-section';
import { LoginSection } from './features/login/login-section/login-section';

export class AppRoot extends React.Component {
  render(): JSX.Element {
    return (     
      <Provider store={store}>
        <BrowserRouter> 
          <Switch>
            <Route path="/login" component={LoginSection} />
            <Route path="/hello" component={HelloSection} />
            <Redirect to="/login"/>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}