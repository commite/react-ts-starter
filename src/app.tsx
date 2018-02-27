import * as React from 'react';
import Hello from './features/hello/hello';
import './app.css';

const logo: string = require('./logo.svg');

class App extends React.Component {
  render(): JSX.Element {
    return (      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/app.tsx</code> and save to reload.
        </p>
        <Hello name="Typescript"/>        
      </div>
    );
  }
}

export default App;
