import React from 'react';
import renderer from 'react-test-renderer';
import GetOrDeleteTask from './GetOrDeleteTask';

it('should have correct button label', () => {
  const task = renderer.create(<GetOrDeleteTask></GetOrDeleteTask>);
  expect(task).toMatchSnapshot();
});
