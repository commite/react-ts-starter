import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import HelloSection from './features/hello/hello-section/hello-section';

class RootApp extends React.Component {
  render(): JSX.Element {
    return (      
      <Switch>
        <Route path="/" component={HelloSection} />
      </Switch>
    );
  }
}

export default RootApp;
