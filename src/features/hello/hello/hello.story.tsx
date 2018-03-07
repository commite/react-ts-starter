import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Hello from './hello';

storiesOf('Hello', module)
  .add('Basic', () => (
    <Hello
      name="Storybook"
      onIncrementClick={action('increment click')}
      onDecrementClick={action('decrement click')}    
    />
  ));  