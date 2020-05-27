import React from 'react';
import renderer from 'react-test-renderer';
import IndividualTasks from './IndividualTasks';

it('should have correct text', () => {
  const home = renderer.create(<IndividualTasks></IndividualTasks>);
  expect(home).toMatchSnapshot();
});
