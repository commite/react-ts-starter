import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppRoot } from './app-root';
import registerServiceWorker from './registerServiceWorker';
import './index.styled';

ReactDOM.render(
  <AppRoot/>,
  document.getElementById('root') as HTMLElement
);

if (module.hot) {
  module.hot.accept('./app-root', () => {
    const NextApp = require('./app-root').default;
    ReactDOM.render(
      <NextApp />,
      document.getElementById('root') as HTMLElement
    );
  });
}

registerServiceWorker();