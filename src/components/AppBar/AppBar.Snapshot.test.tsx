import React from 'react';
import renderer from 'react-test-renderer';
import ApdAppBar from './AppBar';
import { MemoryRouter as Router } from 'react-router-dom';

it('should have correct links', () => {
  const appBar = renderer.create(
    <Router>
      <ApdAppBar></ApdAppBar>
    </Router>
  );
  expect(appBar).toMatchSnapshot();
});
