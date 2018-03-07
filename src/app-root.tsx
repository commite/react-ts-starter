import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/app-state';
import { BrowserRouter } from 'react-router-dom';

import HelloSection from './features/hello/hello-section/hello-section';

class AppRoot extends React.Component {
  render(): JSX.Element {
    return (     
      <Provider store={store}>
        <BrowserRouter> 
          <Switch>
            <Route path="/" component={HelloSection} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default AppRoot;
