import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { HelloSection } from './hello-section';

storiesOf('Hello Section', module)
  .add('Basic', () => (
    <HelloSection/>
  ));  