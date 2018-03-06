import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Hello from './hello-section';

storiesOf('Hello Section', module)
  .add('Basic', () => (
    <Hello/>
  ));  