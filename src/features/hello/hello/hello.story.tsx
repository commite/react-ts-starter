import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Hello from './hello';

storiesOf('Hello', module)
  .add('Basic', () => (
    <Hello name="Storybook"/>
  ));  