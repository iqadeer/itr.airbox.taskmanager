import React from 'react';
import renderer from 'react-test-renderer';
import UpdateTask from './UpdateTask';

it('should have correct button label', () => {
  const task = renderer.create(<UpdateTask></UpdateTask>);
  expect(task).toMatchSnapshot();
});
