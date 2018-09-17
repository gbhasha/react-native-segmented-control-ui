// __tests__/Intro-test.js
import React from 'react';
import TabOption from '../TabOption';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<TabOption />).toJSON();
  expect(tree).toMatchSnapshot();
});