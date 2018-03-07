import * as React from 'react';
import * as ReactDOM from 'react-dom';
import RootApp from './root-app';
import registerServiceWorker from './registerServiceWorker';
import './index.styled';

ReactDOM.render(
  <RootApp/>,
  document.getElementById('root') as HTMLElement
);

if (module.hot) {
  module.hot.accept('./root-app', () => {
    const NextApp = require('./root-app').default;
    ReactDOM.render(
      <NextApp />,
      document.getElementById('root') as HTMLElement
    );
  });
}

registerServiceWorker();