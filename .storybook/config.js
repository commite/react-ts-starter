import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../src/store/app-state';
import '../src/index.styled';

const req = require.context('../src/features', true, /\.story\.tsx$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addDecorator(story => (
  <Provider store={store}>
    {story()}
  </Provider>
));
configure(loadStories, module);