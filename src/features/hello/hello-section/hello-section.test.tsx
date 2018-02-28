import * as React from 'react';
import HelloSection from './hello-section';
import * as enzyme from 'enzyme';
import '../../../enzyme-config';

it('renders without crashing', () => {
  enzyme.shallow(<HelloSection/>);
});
