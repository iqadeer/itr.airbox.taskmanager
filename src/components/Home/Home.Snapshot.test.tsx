import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

it('should have correct text', () => {
  const home = renderer.create(<Home></Home>);
  expect(home).toMatchSnapshot();
});
