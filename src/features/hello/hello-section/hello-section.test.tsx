import * as React from 'react';
import * as ReactDOM from 'react-dom';
import HelloSection from './hello-section';

it('renders without crashing', () => {
  const div: HTMLDivElement = document.createElement('div');
  ReactDOM.render(<HelloSection />, div);
});
