import * as React from 'react';
import * as enzyme from 'enzyme';
import '../../../enzyme-config';
import { HelloComponent as Hello } from './hello';

it('renders the correct text when no enthusiasm level is given', () => {
  const hello: enzyme.ShallowWrapper = enzyme.shallow(<Hello name="Daniel" />);
  expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
  const enthusiasmLevel = 1;
  const hello: enzyme.ShallowWrapper = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={enthusiasmLevel}/>);
  expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
  const enthusiasmLevel = 5;
  const hello: enzyme.ShallowWrapper = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={enthusiasmLevel} />);
  expect(hello.find('.greeting').text()).toEqual('Hello Daniel!!!!!');
});

it('throws when the enthusiasm level is 0', () => {
  const enthusiasmLevel = 0;
  expect(() => {
    enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={enthusiasmLevel} />);
  }).toThrow();
});

it('throws when the enthusiasm level is negative', () => {
  const enthusiasmLevel = -1;
  expect(() => {
    enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={enthusiasmLevel} />);
  }).toThrow();
});